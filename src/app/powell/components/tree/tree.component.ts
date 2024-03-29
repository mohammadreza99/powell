import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  forwardRef,
  Injector,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef
} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
  NgControl
} from '@angular/forms';
import {takeUntil} from "rxjs";
import {TemplateDirective} from '@powell/directives/template';
import {
  CSSStyleDeclaration,
  NgAddon,
  NgFixLabelPosition,
  NgOrientation,
  NgTreeFilterMode,
  NgTreeSelectionMode,
  NgValidation
} from '@powell/models';
import {PrimeContextMenu} from "@powell/primeng";
import {
  PrimeScrollerOptions,
  PrimeTreeFilterEvent,
  PrimeTreeLazyLoadEvent,
  PrimeTreeNodeCollapseEvent,
  PrimeTreeNodeContextMenuSelectEvent,
  PrimeTreeNodeDropEvent,
  PrimeTreeNodeExpandEvent,
  PrimeTreeNodeSelectEvent,
  PrimeTreeNodeUnSelectEvent,
  PrimeTreeScrollEvent,
  PrimeTreeScrollIndexChangeEvent,
  PrimeTreeSelectionChangeEvent
} from "@powell/primeng/api";
import {DestroyService} from "@core/utils";

@Component({
  selector: 'ng-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TreeComponent),
      multi: true
    },
    DestroyService
  ]
})
export class TreeComponent implements OnInit, AfterContentInit, ControlValueAccessor {
  @Input() label: string;
  @Input() labelWidth: number;
  @Input() hint: string;
  @Input() rtl: boolean;
  @Input() showRequiredStar: boolean;
  @Input() labelPos: NgFixLabelPosition;
  @Input() addon: NgAddon;
  @Input() validation: NgValidation;
  @Input() disableConfigChangeEffect: boolean;
  // native properties
  @Input() items: any[];
  @Input() selectionMode: NgTreeSelectionMode;
  @Input() selection: any;
  @Input() style: CSSStyleDeclaration;
  @Input() styleClass: string;
  @Input() contextMenu: PrimeContextMenu;
  @Input() layout: NgOrientation = 'vertical';
  @Input() draggableScope: string | string[];
  @Input() droppableScope: string | string[];
  @Input() draggableNodes: boolean;
  @Input() droppableNodes: boolean;
  @Input() metaKeySelection: boolean = true;
  @Input() propagateSelectionUp: boolean = true;
  @Input() propagateSelectionDown: boolean = true;
  @Input() loading: boolean;
  @Input() loadingIcon: string = 'pi pi-spinner';
  @Input() emptyMessage: string;
  @Input() validateDrop: boolean;
  @Input() filter: boolean;
  @Input() filterBy: string = "label";
  @Input() filterMode: NgTreeFilterMode = 'lenient';
  @Input() filterPlaceHolder: string;
  @Input() filterLocale: string;
  @Input() scrollHeight: string;
  @Input() virtualScroll: boolean;
  @Input() virtualScrollItemSize: number;
  @Input() virtualScrollOptions: PrimeScrollerOptions;
  @Input() lazy: boolean;
  @Input() trackBy: Function;
  @Input() indentation: number = 1.5;
  @Output() onNodeSelect = new EventEmitter<PrimeTreeNodeSelectEvent>();
  @Output() onNodeUnselect = new EventEmitter<PrimeTreeNodeUnSelectEvent>();
  @Output() onNodeExpand = new EventEmitter<PrimeTreeNodeExpandEvent>();
  @Output() onNodeCollapse = new EventEmitter<PrimeTreeNodeCollapseEvent>();
  @Output() onNodeContextMenuSelect = new EventEmitter<PrimeTreeNodeContextMenuSelectEvent>();
  @Output() onNodeDrop = new EventEmitter<PrimeTreeNodeDropEvent>();
  @Output() onFilter = new EventEmitter<PrimeTreeFilterEvent>();
  @Output() onLazyLoad = new EventEmitter<PrimeTreeLazyLoadEvent>();
  @Output() onScroll = new EventEmitter<PrimeTreeScrollEvent>();
  @Output() onScrollIndexChange = new EventEmitter<PrimeTreeScrollIndexChangeEvent>();
  @Output() selectionChange = new EventEmitter<PrimeTreeSelectionChangeEvent>();
  @ContentChildren(TemplateDirective) templates: QueryList<TemplateDirective>;

  inputId: string;
  ngControl: NgControl;
  headerTemplate: TemplateRef<any>;
  emptyTemplate: TemplateRef<any>;
  footerTemplate: TemplateRef<any>;
  loaderTemplate: TemplateRef<any>;
  onModelChange: any = (_: any) => {
  };
  onModelTouched: any = () => {
  };

  constructor(private cd: ChangeDetectorRef,
              private injector: Injector,
              private destroy$: DestroyService) {
  }

  ngOnInit() {
    this.inputId = this.getId();
    let parentForm: FormGroup;
    let rootForm: FormGroupDirective;
    let currentControl: AbstractControl;
    const controlContainer = this.injector.get(
      ControlContainer,
      null,
      {optional: true, host: true, skipSelf: true}
    ) as FormGroupDirective;
    this.ngControl = this.injector.get(NgControl, null);
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
      currentControl = this.ngControl.control;
      if (controlContainer) {
        parentForm = controlContainer.control;
        rootForm = controlContainer.formDirective as FormGroupDirective;
        if (this.ngControl instanceof FormControlName) {
          currentControl = parentForm.get(this.ngControl.name.toString());
        }
        rootForm.ngSubmit.pipe(takeUntil(this.destroy$)).subscribe(() => {
          currentControl.markAsTouched();
        });
      }
    }
  }

  ngAfterContentInit() {
    this.templates.forEach((item: TemplateDirective) => {
      switch (item.getType()) {
        case 'header':
          this.headerTemplate = item.templateRef;
          break;

        case 'footer':
          this.footerTemplate = item.templateRef;
          break;

        case 'empty':
          this.emptyTemplate = item.templateRef;
          break;

        case 'loader':
          this.loaderTemplate = item.templateRef;
          break;
      }
    });
  }

  _onSelectionChange(event: PrimeTreeSelectionChangeEvent) {
    this.selection = event;
    this.selectionChange.emit(this.selection);
    this.onModelChange(this.selection);
  }

  emitter(name: string, event: any) {
    (this[name] as EventEmitter<any>).emit(event);
  }

  getId() {
    return "id" + Math.random().toString(16).slice(2)
  }

  isInvalid() {
    if (this.ngControl) {
      const control = this.ngControl.control;
      return (control.touched || control.dirty) && control.invalid;
    }
    return false
  }

  hasError(type: string) {
    return this.isInvalid() && this.ngControl.control.hasError(type);
  }

  showHint() {
    let hasError = false;
    for (const errorKey in this.validation) {
      if (this.hasError(errorKey)) {
        hasError = true;
      }
    }
    return !hasError;
  }

  writeValue(value: any) {
    this.selection = value;
    this.cd.markForCheck();
  }

  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
}

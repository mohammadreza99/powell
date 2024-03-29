import {
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
  TemplateRef
} from '@angular/core';
import {
  CSSStyleDeclaration,
  NgAsyncEvent,
  NgButtonAppearance,
  NgButtonState,
  NgButtonType,
  NgColor,
  NgIconPosition,
  NgSize
} from '@powell/models';
import {TemplateDirective} from "@powell/directives/template";
import {fromEvent} from "rxjs";
import {DOCUMENT} from "@angular/common";
import {takeUntil} from "rxjs/operators";
import {DestroyService} from "@core/utils";

@Component({
  selector: 'ng-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {'[class.full]': 'full'},
  providers: [DestroyService]
})
export class ButtonComponent implements AfterViewInit, OnChanges {
  @Input() appearance: NgButtonAppearance;
  @Input() rounded: boolean;
  @Input() raised: boolean;
  @Input() color: NgColor = 'primary';
  @Input() full: boolean;
  @Input() badgeColor: NgColor = 'primary';
  @Input() size: NgSize = 'md';
  @Input() sizeOnXS: NgSize;
  @Input() sizeOnSM: NgSize;
  @Input() sizeOnMD: NgSize;
  @Input() sizeOnLG: NgSize;
  @Input() sizeOnXL: NgSize;
  @Input() async: boolean;
  @Input() newLabel: string;
  @Input() newIcon: string;
  @Input() newAppearance: NgButtonAppearance;
  @Input() newColor: NgColor = 'primary';
  @Input() defaultState: NgButtonState = 1;
  // native properties
  @Input() type: NgButtonType = 'button';
  @Input() label: string;
  @Input() icon: string;
  @Input() iconPos: NgIconPosition = 'left';
  @Input() badge: string;
  @Input() badgeClass: string;
  @Input() loadingIcon: string;
  @Input() disabled: boolean;
  @Input() style: CSSStyleDeclaration;
  @Input() styleClass: any;
  @Output() onClick = new EventEmitter<MouseEvent>();
  @Output() onBlur = new EventEmitter<FocusEvent>();
  @Output() onFocus = new EventEmitter<FocusEvent>();
  @Output() defaultStateChange = new EventEmitter<NgButtonState>();
  @Output() onClickAsync = new EventEmitter<NgAsyncEvent<MouseEvent>>();
  @ContentChildren(TemplateDirective) templates: QueryList<TemplateDirective>;

  loading: boolean;
  contentTemplate: TemplateRef<any>;
  iconTemplate: TemplateRef<any>;
  loadingIconTemplate: TemplateRef<any>;
  _tmpLabel: string;
  _tmpIcon: string;
  _tmpAppearance: NgButtonAppearance;
  _tmpColor: NgColor;
  _tmpSize: NgSize;

  constructor(@Inject(DOCUMENT) private document: Document,
              private destroy$: DestroyService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.async) {
      this.toggleState(this.defaultState);
    }
  }

  ngAfterViewInit() {
    this._tmpSize = this.size;
    const getButtonSize = () => {
      const windowWidth = this.document.defaultView.innerWidth;
      if (windowWidth <= 575.98) {
        this.size = this.sizeOnXS ?? this._tmpSize;
      } else if (windowWidth <= 767.98) {
        this.size = this.sizeOnSM ?? this._tmpSize;
      } else if (windowWidth <= 991.98) {
        this.size = this.sizeOnMD ?? this._tmpSize;
      } else if (windowWidth <= 1199.98) {
        this.size = this.sizeOnLG ?? this._tmpSize;
      } else {
        this.size = this.sizeOnXL ?? this._tmpSize;
      }
    }
    getButtonSize()
    fromEvent(this.document.defaultView, 'resize').pipe(takeUntil(this.destroy$)).subscribe(() => {
      getButtonSize()
    })
    this.templates.forEach((item: TemplateDirective) => {
      switch (item.getType()) {
        case 'content':
          this.contentTemplate = item.templateRef;
          break;

        case 'icon':
          this.iconTemplate = item.templateRef;
          break;

        case 'loadingIcon':
          this.loadingIconTemplate = item.templateRef;
          break;
      }
    });
  }

  _onClick(event: MouseEvent) {
    if (this.async) {
      this.loading = true;
      this.defaultState = this.defaultState === 1 ? 2 : 1;
      this.defaultStateChange.emit(this.defaultState);
      this.onClickAsync.emit({event, loadingCallback: this.removeLoading});
    } else {
      this.onClick.emit(event);
    }
  }

  removeLoading = (ok: boolean = false) => {
    this.loading = false;
    if (ok) {
      this.toggleState(this.defaultState);
    }
  }

  toggleState(defaultState: NgButtonState) {
    if (!this.disabled) {
      this._tmpLabel = defaultState === 1 ? this.label : this.newLabel || this.label;
      this._tmpIcon = defaultState === 1 ? this.icon : this.newIcon || this.icon;
      this._tmpAppearance = defaultState === 1 ? this.appearance : this.newAppearance || this.appearance;
      this._tmpColor = defaultState === 1 ? this.color : this.newColor || this.color;
    } else {
      this.defaultState = 1;
      this._tmpLabel = this.label;
      this._tmpIcon = this.icon;
      this._tmpAppearance = this.appearance;
      this._tmpColor = this.color;
    }
  }
}

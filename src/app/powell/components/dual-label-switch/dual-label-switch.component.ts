import {ChangeDetectorRef, Component, EventEmitter, forwardRef, Injector, Input, OnInit, Output} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
  NgControl
} from "@angular/forms";
import {takeUntil} from "rxjs";
import {CSSStyleDeclaration, NgAsyncEvent, NgFixLabelPosition, NgValidation} from "@powell/models";
import {DestroyService} from "@core/utils";
import {PrimeInputSwitchChangeEvent} from "@powell/primeng/api";

@Component({
  selector: 'ng-dual-label-switch',
  templateUrl: './dual-label-switch.component.html',
  styleUrls: ['./dual-label-switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DualLabelSwitchComponent),
      multi: true
    },
    DestroyService
  ]
})
export class DualLabelSwitchComponent implements OnInit, ControlValueAccessor {
  @Input() value: any;
  @Input() label: string;
  @Input() labelLeft: string;
  @Input() labelRight: string;
  @Input() leftValue: string = 'left';
  @Input() rightValue: string = 'right';
  @Input() labelWidth: number;
  @Input() hint: string;
  @Input() rtl: boolean;
  @Input() showRequiredStar: boolean;
  @Input() labelPos: NgFixLabelPosition;
  @Input() validation: NgValidation;
  @Input() async: boolean;
  @Input() showAsyncLoading: boolean = true;
  @Input() disableConfigChangeEffect: boolean;
  // native properties
  @Input() style: CSSStyleDeclaration;
  @Input() styleClass: string;
  @Input() tabindex: number;
  @Input() disabled: boolean;
  @Input() readonly: boolean;
  @Output() onChange = new EventEmitter<PrimeInputSwitchChangeEvent>();
  @Output() onChangeAsync = new EventEmitter<NgAsyncEvent<PrimeInputSwitchChangeEvent>>();

  loading: boolean;
  inputId: string;
  ngControl: NgControl;
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
          if (!this.disabled) {
            currentControl.markAsTouched();
          }
        });
      }
    }
    this.setInitValue()
  }

  setInitValue() {
    if (!this.value) {
      this.value = this.leftValue;
      this.onModelChange(this.value)
    }
  }

  _onChange(event: PrimeInputSwitchChangeEvent) {
    if (this.async) {
      this.loading = true;
      this.disabled = true;
      this.cd.detectChanges();
      this.onChangeAsync.emit({loadingCallback: this.removeLoading, event});
    } else {
      this.onModelChange(event.checked);
      this.onChange.emit(event);
    }
  }

  removeLoading = (ok: boolean = true) => {
    this.loading = false;
    this.disabled = false;
    if (!ok) {
      this.value = !this.value;
    }
  };

  getId() {
    return "id" + Math.random().toString(16).slice(2)
  }

  isInvalid() {
    if (this.ngControl) {
      const control = this.ngControl.control;
      return (!this.disabled && (control.touched || control.dirty) && control.invalid);
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
    this.value = value;
    this.setInitValue()
    this.cd.markForCheck();
  }

  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }

  setDisabledState(val: boolean) {
    this.disabled = val;
    this.cd.markForCheck();
  }
}

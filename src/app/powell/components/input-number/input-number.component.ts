import {ChangeDetectorRef, Component, EventEmitter, forwardRef, Injector, Input, OnInit, Output,} from '@angular/core';
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
import {
  CSSStyleDeclaration,
  NgAddon,
  NgCurrency,
  NgCurrencyDisplay,
  NgIconPosition,
  NgLabelPosition,
  NgNumberButtonLayout,
  NgNumberMode,
  NgSize,
  NgValidation
} from '@powell/models';
import {DestroyService} from "@core/utils";
import {PrimeInputNumberInputEvent} from "@powell/primeng/api";

@Component({
  selector: 'ng-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNumberComponent),
      multi: true
    },
    DestroyService
  ]
})
export class InputNumberComponent implements OnInit, ControlValueAccessor {
  @Input() value: number;
  @Input() label: string;
  @Input() filled: boolean;
  @Input() labelWidth: number;
  @Input() hint: string;
  @Input() rtl: boolean;
  @Input() showRequiredStar: boolean;
  @Input() icon: string;
  @Input() labelPos: NgLabelPosition;
  @Input() iconPos: NgIconPosition = 'left';
  @Input() addon: NgAddon;
  @Input() validation: NgValidation;
  @Input() inputSize: NgSize;
  @Input() disableConfigChangeEffect: boolean;
  // native properties
  @Input() format: boolean = true;
  @Input() showButtons: boolean;
  @Input() buttonLayout: NgNumberButtonLayout = 'stacked';
  @Input() incrementButtonClass: string;
  @Input() decrementButtonClass: string;
  @Input() incrementButtonIcon: string = 'pi pi-chevron-up';
  @Input() decrementButtonIcon: string = 'pi pi-chevron-down';
  @Input() locale: string;
  @Input() localeMatcher: 'lookup' | 'best fit' = 'best fit';
  @Input() mode: NgNumberMode = 'decimal';
  @Input() prefix: string;
  @Input() suffix: string;
  @Input() currency: NgCurrency;
  @Input() currencyDisplay: NgCurrencyDisplay = 'symbol';
  @Input() useGrouping: boolean = true;
  @Input() minFractionDigits: number;
  @Input() maxFractionDigits: number;
  @Input() min: number;
  @Input() max: number;
  @Input() step: number = 1;
  @Input() allowEmpty: boolean = true;
  @Input() style: CSSStyleDeclaration;
  @Input() styleClass: string;
  @Input() inputStyle: CSSStyleDeclaration;
  @Input() inputStyleClass: string;
  @Input() placeholder: string;
  @Input() size: number;
  @Input() maxlength: number;
  @Input() tabindex: number;
  @Input() disabled: boolean;
  @Input() readonly: boolean;
  @Input() title: string;
  @Input() autocomplete: string;
  @Input() showClear: boolean;
  @Output() onFocus = new EventEmitter<Event>();
  @Output() onBlur = new EventEmitter<Event>();
  @Output() onInput = new EventEmitter<PrimeInputNumberInputEvent>();
  @Output() onKeyDown = new EventEmitter<KeyboardEvent>();
  @Output() onClear = new EventEmitter<void>();

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
  }

  _onInput(event: any) {
    this.onInput.emit(event);
    this.onModelChange(event.value);
  }

  _onBlur(event: Event) {
    this.onBlur.emit(event);
    this.onModelTouched();
  }

  _onClear() {
    this.onClear.emit();
    this.onModelChange(null);
  }

  _onFocus(event: Event) {
    this.onFocus.emit(event);
  }

  _onKeyDown(event: KeyboardEvent) {
    this.onKeyDown.emit(event);
  }

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

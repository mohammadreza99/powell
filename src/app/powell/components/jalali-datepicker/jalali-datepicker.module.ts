import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AddonModule} from "@powell/directives/addon";
import {JalaliDatepickerComponent, JalaliPickerBaseComponent} from "@powell/components/jalali-datepicker";
import {LabelStarModule} from "@powell/pipes/label-star";
import {$ButtonModule, $RippleModule} from "@powell/primeng";

@NgModule({
  declarations: [JalaliDatepickerComponent, JalaliPickerBaseComponent],
  exports: [JalaliDatepickerComponent],
  imports: [
    $ButtonModule,
    $RippleModule,
    CommonModule,
    FormsModule,
    LabelStarModule,
    AddonModule
  ],
})
export class JalaliDatepickerModule {
}

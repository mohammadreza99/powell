import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AddonModule} from "@powell/directives/addon";
import {InputNumberComponent} from "@powell/components/input-number";
import {LabelStarModule} from "@powell/pipes/label-star";
import {$InputNumberModule} from "@powell/primeng";

@NgModule({
  declarations: [InputNumberComponent],
  exports: [InputNumberComponent],
  imports: [
    $InputNumberModule,
    CommonModule,
    FormsModule,
    LabelStarModule,
    AddonModule
  ],
})
export class InputNumberModule {
}

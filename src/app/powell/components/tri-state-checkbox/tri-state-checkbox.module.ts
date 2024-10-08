import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {TriStateCheckboxComponent} from "@powell/components/tri-state-checkbox";
import {LabelStarModule} from "@powell/pipes/label-star";
import {$TriStateCheckboxModule} from "@powell/primeng";

@NgModule({
  declarations: [TriStateCheckboxComponent],
  exports: [TriStateCheckboxComponent],
  imports: [
    $TriStateCheckboxModule,
    CommonModule,
    FormsModule,
    LabelStarModule
  ],
})
export class TriStateCheckboxModule {
}

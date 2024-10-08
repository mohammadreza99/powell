import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SelectButtonComponent} from "@powell/components/select-button";
import {LabelStarModule} from "@powell/pipes/label-star";
import {$SelectButtonModule} from "@powell/primeng";

@NgModule({
  declarations: [SelectButtonComponent],
  exports: [SelectButtonComponent],
  imports: [
    $SelectButtonModule,
    CommonModule,
    FormsModule,
    LabelStarModule
  ],
})
export class SelectButtonModule {
}

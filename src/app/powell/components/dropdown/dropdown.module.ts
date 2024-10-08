import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AddonModule} from "@powell/directives/addon";
import {DropdownComponent} from "@powell/components/dropdown";
import {LabelStarModule} from "@powell/pipes/label-star";
import {$DropdownModule} from "@powell/primeng";
import {TemplateModule} from "@powell/directives/template";

@NgModule({
  declarations: [DropdownComponent],
  exports: [DropdownComponent, TemplateModule],
  imports: [
    $DropdownModule,
    CommonModule,
    FormsModule,
    LabelStarModule,
    AddonModule
  ],
})
export class DropdownModule {
}

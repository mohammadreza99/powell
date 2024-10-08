import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {$AutoCompleteModule} from "@powell/primeng";
import {AutoCompleteComponent} from "@powell/components/auto-complete";
import {LabelStarModule} from "@powell/pipes/label-star";
import {AddonModule} from "@powell/directives/addon";
import {TemplateModule} from "@powell/directives/template";

@NgModule({
  declarations: [AutoCompleteComponent],
  exports: [AutoCompleteComponent, TemplateModule],
  imports: [
    $AutoCompleteModule,
    CommonModule,
    FormsModule,
    LabelStarModule,
    AddonModule
  ]
})
export class AutoCompleteModule {
}

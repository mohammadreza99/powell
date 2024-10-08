import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AddonModule} from "@powell/directives/addon";
import {TreeComponent} from "@powell/components/tree";
import {LabelStarModule} from "@powell/pipes/label-star";
import {$TreeModule} from "@powell/primeng";
import {TemplateModule} from "@powell/directives/template";

@NgModule({
  declarations: [TreeComponent],
  exports: [TreeComponent, TemplateModule],
  imports: [
    $TreeModule,
    AddonModule,
    LabelStarModule,
    CommonModule
  ],
})
export class TreeModule {
}

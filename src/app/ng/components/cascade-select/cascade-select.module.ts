import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ConfigHandlerModule} from "@ng/directives/config-handler";
import {AddonModule} from "@ng/directives/addon";
import {CascadeSelectComponent} from "@ng/components/cascade-select";
import {LabelStarModule} from "@ng/pipes/label-star";
import {PrimeCascadeSelectModule} from "@ng/primeng";
import {TemplateModule} from "@ng/directives/template";

@NgModule({
  declarations: [CascadeSelectComponent],
  exports: [CascadeSelectComponent, TemplateModule],
  imports: [
    PrimeCascadeSelectModule,
    CommonModule,
    FormsModule,
    LabelStarModule,
    ConfigHandlerModule,
    AddonModule,
  ],
})
export class CascadeSelectModule {
}

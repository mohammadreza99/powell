import {NgModule} from "@angular/core";
import {TableModule} from "@powell/components/table";
import {ExtrasModule} from "@modules/main/pages/showcase/extras.module";
import {RouterModule} from "@angular/router";
import {TablePage} from "@modules/main/pages/showcase/pages/table";
import {MultiSelectModule} from "@powell/components/multi-select";
import {FormsModule} from "@angular/forms";
import {PrimeTableModule} from "@powell/primeng";

@NgModule({
  declarations: [TablePage],
  imports: [
    TableModule,
    MultiSelectModule,
    PrimeTableModule,
    FormsModule,
    ExtrasModule,
    RouterModule.forChild([{path: '', component: TablePage}])
  ],
})
export class TablePageModule {
}

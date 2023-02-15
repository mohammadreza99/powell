import {Component} from '@angular/core';
import {GlobalConfig} from "@core/global.config";

@Component({
  selector: 'ng-main-page',
  styleUrls: ['main.page.scss'],
  templateUrl: './main.page.html',
  animations: [GlobalConfig.routeAnimation]
})
export class MainPage {
}

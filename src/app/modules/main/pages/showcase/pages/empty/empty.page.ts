import {Component, inject} from '@angular/core';
import {NgEmptyIcon} from "@powell/models";
import {ConfigService} from "@powell/api";

@Component({
  selector: 'ng-empty-page',
  templateUrl: './empty.page.html',
  styleUrls: ['./empty.page.scss']
})
export class EmptyPage {
  private configService = inject(ConfigService);

  imageType: NgEmptyIcon = 'box1';
  icon: string = '';
  text: string = '';
  rtl: boolean = this.configService.get().rtl;
  followConfig: boolean = this.configService.get().followConfig;
}

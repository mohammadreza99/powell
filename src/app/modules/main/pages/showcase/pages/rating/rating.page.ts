import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgFixLabelPosition} from '@powell/models';
import {ConfigService} from "@powell/api";

@Component({
  selector: 'ng-rating-page',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage {
  private configService = inject(ConfigService);

  form = new FormGroup({
    c1: new FormControl(null, [Validators.required]),
  });
  binding;

  label: string = 'label';
  labelWidth: number = 100;
  hint: string = '';
  rtl: boolean = this.configService.getConfig().rtl;
  showRequiredStar: boolean = this.configService.getConfig().showRequiredStar;
  labelPos: NgFixLabelPosition = this.configService.getConfig().fixLabelPos;
  followConfig: boolean = this.configService.getConfig().followConfig;
  // native properties
  stars: number = 5;
  cancel: boolean = true;
  disabled: boolean = false;
  readonly: boolean = false;
  iconOnClass: string = 'pi pi-star-fill';
  iconOffClass: string = 'pi pi-star';
  iconCancelClass: string = 'pi pi-ban';
}

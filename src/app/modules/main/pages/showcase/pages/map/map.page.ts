import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgAddon, NgFixLabelPosition} from "@powell/models";
import {ConfigService} from "@powell/api";

@Component({
  selector: 'ng-map-page',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage {
  private configService = inject(ConfigService);

  form = new FormGroup({
    c1: new FormControl(null, [Validators.required]),
  });
  binding;

  label: string = 'label';
  labelWidth: number = 100;
  hint: string = '';
  rtl: boolean = this.configService.get().rtl;
  showRequiredStar: boolean = this.configService.get().showRequiredStar;
  labelPos: NgFixLabelPosition = this.configService.get().fixLabelPos;
  addon: NgAddon;
  disabled: boolean = false;
  multiple: boolean = false;
  clearMarkerOnClick: boolean = true;
  showClear: boolean = true;
  followConfig: boolean = this.configService.get().followConfig;
  // native properties
  readonly: boolean = false;
}

import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgFixLabelPosition} from '@powell/models';
import {ConfigService} from "@powell/api";

@Component({
  selector: 'ng-editor-page',
  templateUrl: './editor.page.html',
  styleUrls: ['./editor.page.scss'],
})
export class EditorPage {
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
  disabled: boolean = false;
  readonly: boolean = false;
}

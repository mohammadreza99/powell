import {Inject, Injectable} from '@angular/core';
import {NgConfig} from "@ng/models/config";
import {PrimeNGConfig} from "primeng/api";
import {ThemeService} from "@ng/services/theme.service";
import {DOCUMENT} from "@angular/common";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private primengConfig: PrimeNGConfig,
              private themeService: ThemeService,
              @Inject(DOCUMENT) private document: Document) {
  }

  private configChangeSubject = new Subject<NgConfig>();
  configChange$ = this.configChangeSubject.asObservable();

  private _config: NgConfig = {
    ripple: true,
    rtl: true,
    fixLabelPos: 'fix-side',
    labelPos: 'fix-side',
    theme: 'lara-light-indigo',
    filled: false,
    inputSize: 'lg',
    showRequiredStar: false
  };

  setConfig(config: NgConfig) {
    this._config = {...this._config, ...config};
    this.primengConfig.ripple = this._config.ripple;
    this.primengConfig.overlayOptions = this._config.overlayOptions;
    if (this._config.ripple === false) {
      this.document.body.classList.add('p-ripple-disabled');
    } else {
      this.document.body.classList.remove('p-ripple-disabled');
    }
    if (config?.theme) {
      this.themeService.changeTheme(config.theme)
    }
    this.configChangeSubject.next(this._config);
  }

  getConfig() {
    return this._config
  }
}

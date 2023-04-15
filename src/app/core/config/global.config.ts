import {Injector as AngularInjector} from '@angular/core';
import {AppConfig} from "@core/models";
import {RouteAnimation} from "@core/config";

export class Global {
  static Injector: AngularInjector;

  static Config: AppConfig = {
    lang: 'en',
    routeAnimation: RouteAnimation('fade2')
  };
}

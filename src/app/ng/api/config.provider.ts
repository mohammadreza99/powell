import {DOCUMENT} from "@angular/common";
import {ConfirmationService, FilterService, MessageService, PrimeNGConfig} from "primeng/api";
import {DialogService} from "primeng/dynamicdialog";
import {NgConfig} from "@ng/models";
import {ThemeService} from "@ng/api/theme.service";
import {ConfigService} from "@ng/api/config.service";

export function initiateNgConfigProvider(ngConfig?: NgConfig) {
  return [
    ThemeService,
    MessageService,
    DialogService,
    ConfirmationService,
    FilterService,
    {
      provide: ConfigService,
      useFactory: (primengConfig: PrimeNGConfig, themeService: ThemeService, document: Document) => {
        const configService = new ConfigService(primengConfig, themeService, document);
        configService.setConfig(ngConfig);
        return configService;
      },
      deps: [PrimeNGConfig, ThemeService, DOCUMENT]
    }
  ]
}

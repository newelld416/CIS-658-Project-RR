import { ChangeDetectionStrategy, Component } from '@angular/core';

import { I18nService, ConfigService } from '@services';
import { CountryCd } from '@models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(
    private i18nService: I18nService,
    private configService: ConfigService,
  ) {
    this.init();
  }

  init(): void {
    // TODO AL-86: get country dynamically based on authenticated user data
    this.i18nService.setupLocales(this.configService.getLocalesByCountryCd(CountryCd.US));
  }

}

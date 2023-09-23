import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-flags-lenguages',
  templateUrl: './flags-lenguages.component.html',
  styleUrls: ['./flags-lenguages.component.scss']
})
export class FlagsLenguagesComponent {

  isSpanishActive = true;

  constructor(private translateService: TranslateService) {
    // Configuración inicial del idioma (puedes omitir esto si no es necesario)
    this.translateService.setDefaultLang('es');
    this.translateService.use('es');
  }
  changeLanguage(selectedLanguage: any) {
    this.translateService.use(selectedLanguage);
    this.isSpanishActive = selectedLanguage === 'es';
  }
}

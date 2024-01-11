import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'doble-electricidad';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);
    const lang = this.translate.getBrowserLang();
    if (lang !== 'es' && lang !== 'en') {
      this.translate.setDefaultLang('es');
    } else {
      this.translate.use(lang);
    }
  }
}

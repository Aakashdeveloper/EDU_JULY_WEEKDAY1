import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


  /*
  Component==> logical/html/css
  Module===>   Declration
  Pipe=====>   Manupulate your data
  Router===>   Routing
  Service==>   help to connect to third API
  */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

<<<<<<< HEAD
import { CustomerModule } from './CustomerApp/CustomerApp.MainModule';
=======
import { CustomerModule } from './CustomerApp/CustomerApp.module';
>>>>>>> faa6f2ae5af6a3750ae224a12a075929ff975609
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(CustomerModule)
  .catch(err => console.error(err));

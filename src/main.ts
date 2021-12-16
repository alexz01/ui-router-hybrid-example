import { setAngularJSGlobal, UpgradeModule } from '@angular/upgrade/static';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as angular from 'angular';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
// .then(PlatformRef =>{
//   const upgradeModule = PlatformRef.injector.get(UpgradeModule)
//   setAngularJSGlobal(angular);
//   upgradeModule.bootstrap(document.body, ['ngAppModule'])
// })
  .catch(err => console.error(err));

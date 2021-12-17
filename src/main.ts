import { UrlService } from '@uirouter/core';
import { setAngularJSGlobal, UpgradeModule } from '@angular/upgrade/static';
import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as angular from 'angular';
import { UIRouter } from '@uirouter/angularjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
.then(platformRef =>{
  console.log('bootstrap in main ts')
  const urlService: UrlService = platformRef.injector.get(UIRouter).urlService;

  // Instruct UIRouter to listen to URL changes
  function startUIRouter() {
    urlService.listen();
    urlService.sync();
  }

  platformRef.injector.get<NgZone>(NgZone).run(startUIRouter);
})
  .catch(err => console.error(err));

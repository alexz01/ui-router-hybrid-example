
import { UrlService } from '@uirouter/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NgZone, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { setAngularJSGlobal, UpgradeModule } from '@angular/upgrade/static';
import { ApplicationRef } from '@angular/core';
import * as angular from 'angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import '../../ng1App/ng1App.module';
import { Ng1AppComponent } from './ng1App.component';
import { LandingComponent } from './landing/landing.component';
import { CommonModule } from '@angular/common';
import { UIRouter } from '@uirouter/angularjs';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';
@NgModule({
  declarations: [
    AppComponent,
    Ng1AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UpgradeModule,
    UIRouterUpgradeModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule,
  ) { }

  ngDoBootstrap(app: ApplicationRef) {
    console.log('bootstrapped in ngDObootstrap')

    app.bootstrap(AppComponent);
    setAngularJSGlobal(angular);
    this.upgrade.bootstrap(document.body, ['ngAppModule'], { strictDi: true });
  }
}

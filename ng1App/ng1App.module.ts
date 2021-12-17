// import 'angular-route';
import * as angular from 'angular';
import 'angular-sanitize';
import 'angular-animate';
import 'angular-ui-bootstrap';
import 'angular-messages';
import 'angular-filter';
import 'angular-cookies';
import 'angular-aria';
import 'angular-slick';
import 'angular-scroll';
import 'angular-touch';

import uiRouter from "@uirouter/angularjs";
import { upgradeModule } from "@uirouter/angular-hybrid";
import { UrlService } from '@uirouter/core';
import { StateProvider } from '@uirouter/angularjs';

import { landingModule } from './landing/landing.module';
import { otherModule } from './other-page/other.module';
import { pageNotFoundModule } from './page-not-found/page-not-found.module';

import { ng1AppComponent } from './ng1App.component';
function defaultState($stateProvider: StateProvider, $urlServiceProvider: UrlService, $locationProvider: angular.ILocationProvider) {
  $stateProvider.state({ name: 'app', redirectTo: 'landing', url: '' });
  $urlServiceProvider.deferIntercept();
  $urlServiceProvider.rules.otherwise('/pageNotFound');
  $locationProvider.hashPrefix('');
}
defaultState.$inject = ['$stateProvider', '$urlServiceProvider', '$locationProvider'];


angular.module('ngAppModule', [
  'ngSanitize',
  'ngAnimate',
  'ui.bootstrap',
  'ngMessages',
  'angular.filter',
  'ngTouch',
  'ngCookies',
  'ngAria',
  'slick',
  'duScroll',
  uiRouter,
  upgradeModule.name,
  landingModule.name,
  otherModule.name,
  pageNotFoundModule.name
])
  .component('ngApp', ng1AppComponent)
  .config(defaultState);


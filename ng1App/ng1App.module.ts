import * as angular from 'angular';
import './landing/landing.module';
import 'angular-route';
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
import 'angular-shims-placeholder';

import { ng1AppComponent } from './ng1App.component';
import 'ng1App/landing/landing.module';
import 'ng1App/other-page/other.module';

angular.module('ngAppModule', [
  'ngRoute',
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
  'LandingModule',
  'OtherModule'
])
  .component('ngApp', ng1AppComponent)
  .config(['$locationProvider', function($locationProvider: angular.ILocationProvider){
    $locationProvider.hashPrefix('');
  }])


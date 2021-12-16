import * as angular from 'angular';

import { landingComponent } from './landing.component';

function landingRoutes($routeProvider: angular.route.IRouteProvider) {
  console.log('configured other route');
  $routeProvider .when('/', {
      template: '<landing></landing>',
      resolve: {
        log: function(){ console.log('resolving /')}
      },
    })
    .otherwise({ redirectTo: '/' , });
}
landingRoutes.$inject = ['$routeProvider'];

export const landingModule = angular.module('LandingModule', ['ngRoute'])
  .component('landing', landingComponent)
  .config(landingRoutes);

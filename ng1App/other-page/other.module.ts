import * as angular from 'angular';
import { otherComponent } from './other.component';

function otherRoutes($routeProvider: angular.route.IRouteProvider) {
  console.log('configured other route');
  $routeProvider.when('/other', {
    template: '<other></other>',
    resolve: {
      log: function(){ console.log('resolving /other')}
    }
  });
}
otherRoutes.$inject = ['$routeProvider'];

export const otherModule = angular.module('OtherModule', ['ngRoute'])
  .component('other', otherComponent)
  .config(otherRoutes);

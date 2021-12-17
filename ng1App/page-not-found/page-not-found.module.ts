import { StateProvider, StateRegistry } from '@uirouter/angularjs';
import uiRouter from "@uirouter/angularjs";
import * as angular from 'angular';
import { pageNotFoundComponent } from './page-not-found.component';
function pageNotfoundStates($stateProvider: StateProvider){
  $stateProvider.state({
    url: '/pageNotFound',
    name: 'pageNotFound',
    component: 'pageNotFound'
  });

}
pageNotfoundStates.$inject =['$stateProvider'];

export const pageNotFoundModule = angular.module('PageNotFoundModule', [uiRouter])
  .component('pageNotFound', pageNotFoundComponent)
  // .config(otherRoutes);
  .config(pageNotfoundStates);

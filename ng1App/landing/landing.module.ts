import uiRouter, { StateProvider } from "@uirouter/angularjs";
import * as angular from 'angular';

import { landingComponent } from './landing.component';

function landingStates($stateProvider: StateProvider) {
  $stateProvider.state({
    url: '/',
    name: 'landing',
    component: 'landing'
  });
}
landingStates.$inject = ['$stateProvider'];

export const landingModule = angular.module('LandingModule', [uiRouter])
  .component('landing', landingComponent)
  // .config(landingRoutes)
  .config(landingStates)
  ;

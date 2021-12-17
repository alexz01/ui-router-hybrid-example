import { StateProvider, StateRegistry } from '@uirouter/angularjs';
import uiRouter from "@uirouter/angularjs";
import * as angular from 'angular';
import { otherComponent } from './other.component';
function otherStates($stateProvider: StateProvider){
  $stateProvider.state({
    url: '/other',
    name: 'other',
    component: 'other'
  });

}
otherStates.$inject =['$stateProvider'];

export const otherModule = angular.module('OtherModule', [uiRouter])
  .component('other', otherComponent)
  .config(otherStates);

import {IComponentOptions, IOnInit} from 'angular';

class LandingController implements IOnInit{

  $onInit(){
    console.log('Landing component initialized');
  }
}

export const landingComponent: IComponentOptions = {
  template: require('html-loader!./landing.component.html'),
  // template: '<p>Successfully loaded <b>landing</b> page</p>',
  controller: LandingController,
}


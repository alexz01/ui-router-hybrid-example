import {IComponentOptions, IOnInit} from 'angular';

class OtherController implements IOnInit{

  $onInit(){
    console.log('Other component initialized');
  }
}

export const otherComponent: IComponentOptions = {
  template: require('html-loader!./other.component.html'),
  // template: '<p>Successfully loaded <b>other</b> page</p>',
  controller: OtherController,
}


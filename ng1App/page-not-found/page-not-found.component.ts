import {IComponentOptions, IOnInit} from 'angular';

class PageNotFoundController implements IOnInit{

  $onInit(){
    console.log('Other component initialized');
  }
}

export const pageNotFoundComponent: IComponentOptions = {
  template: require('html-loader!./page-not-found.component.html'),
  // template: '<p>Successfully loaded <b>other</b> page</p>',
  controller: PageNotFoundController,
}


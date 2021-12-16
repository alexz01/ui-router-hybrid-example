import { IComponentOptions, IOnInit } from 'angular';

class Ng1AppController implements IOnInit {

  $onInit() {
    console.log('Ng1App initialized');
  }
}

export const ng1AppComponent: IComponentOptions = {
  template: require('html-loader!./ng1App.component.html'),
  controller: Ng1AppController,
}


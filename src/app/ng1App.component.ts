import { Component, OnInit } from "@angular/core";
import { setAngularJSGlobal, UpgradeModule } from "@angular/upgrade/static";
import * as angular from 'angular';
@Component({
  selector: 'ng1-app-in-ng2',
  template: '<ng-app></ng-app>'
  // template: '<div ng-view></div>'
})
export class Ng1AppComponent implements OnInit{
  constructor(private upgrade: UpgradeModule){}

  ngOnInit(){
    setAngularJSGlobal(angular);
    this.upgrade.bootstrap(document.body, ['ngAppModule'], { strictDi: true });
    console.debug('ng1app in ng2 initialized');
  }
}

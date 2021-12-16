import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng2-landing',
  template: '<p>Loaded <b>ng10 landing</b> page</p>'
})
export class LandingComponent implements OnInit{

  ngOnInit(){
    console.log('initialized <b>ng2</b> landing component')
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'picapp';
  ngOnInit(){
    console.log('initialized app component')
  }
}

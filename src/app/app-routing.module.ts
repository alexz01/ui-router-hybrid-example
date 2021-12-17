import { TestForm } from './reactive-form-test/test-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ng1AppComponent } from './ng1App.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgHybridStateDeclaration, UIRouterUpgradeModule } from '@uirouter/angular-hybrid';

const routes: Routes = [
  { path: '', component: Ng1AppComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'form', component: TestForm },
  { path: '**', redirectTo: '/' },
];

const states: Array<NgHybridStateDeclaration> = [
  { url: '/landing', name:"ng2Landing", component: LandingComponent },
  { url: '/form', name:'ng2test', component: TestForm },
  // {url: '', redirectTo: 'landing', name:'app'}
];

@NgModule({
  imports: [
    UIRouterUpgradeModule.forRoot({ states }),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [RouterModule],
  declarations: [
    TestForm
  ]
})
export class AppRoutingModule { }

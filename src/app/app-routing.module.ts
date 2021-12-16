import { TestForm } from './reactive-form-test/test-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ng1AppComponent } from './ng1App.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: Ng1AppComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'form', component: TestForm },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
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

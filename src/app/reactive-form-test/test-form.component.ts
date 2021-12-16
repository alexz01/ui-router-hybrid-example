import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  templateUrl: './test-form.component.html'
})
export class TestForm implements OnInit{
  registrationForm: FormGroup;
  City = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];
  constructor(private fb: FormBuilder){}

  ngOnInit() {
    /*########### Form ###########*/
    this.registrationForm = this.fb.group({
      e: this.fb.group({
        1: ['', [Validators.required]],
        2: ['', [Validators.required]],
      }),
    });
  }

  save(){
    this.markAllDirtyAndRunValidators(this.registrationForm);
  }

  markAllDirtyAndRunValidators(formGroup: FormGroup) {
    Object.keys(formGroup.controls)
      .forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          control.markAsDirty();
        }
        else if (control instanceof FormGroup) {
          this.markAllDirtyAndRunValidators(control);
        }

        control.updateValueAndValidity();
      });
  }
}

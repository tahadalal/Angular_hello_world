import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import { UserNameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    account : new FormGroup({
      username : new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          UserNameValidators.cannotContainSpace
        ],
        UserNameValidators.shouldBeUnique
      ),
      password : new FormControl('',Validators.required)
    })
  });

  get username(){ // this is called a property
    return this.form.get('account.username');
  }

  login(){
    this.form.setErrors({
      invaidLogin : true
    });
  }

  // Consider the below syntax
  form1 = new FormGroup({
    name : new FormControl('',Validators.required),
    contact : new FormGroup({
      email : new FormControl(),
      phone : new FormControl()
    }),
    topics : new FormArray([])
  });

  // Here is an alternate syntax for the formGroup object
  constructor(fb : FormBuilder){
    this.form1 = fb.group({
      name : ['',Validators.required],
      contact : fb.group({
        email : [],
        contact : []
      }),
      topics : fb.array([])
    });
  }
}

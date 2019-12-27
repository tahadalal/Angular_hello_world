import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { PasswordValidator } from '../new-course-form/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent implements OnInit {

  form;

  constructor(fb : FormBuilder) { 
    this.form = fb.group({
      oldPassword : fb.control('', [Validators.required],PasswordValidator.invalidOldPassword),
      newPassword : fb.control('', [Validators.required]),
      confirmPassword : fb.control('', [Validators.required])
    },{
      validators : PasswordValidator.passwordShouldMatch // This is a validator for the form
    })
  }

  get oldPassword(){
    return this.form.get('oldPassword');
  }

  get newPassword(){
    return this.form.get('newPassword');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }
  ngOnInit() {
  }

  

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form', // the app is prefixed to avoid clashing with any other imported libraries
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {

  contactMethods = [
    { id :1, name : 'phone' },
    { id :2, name : 'email' }
  ];

  log(message){
    console.log(message);
    // This prints the NgModel in the console.
    // the FormControl objects appears under the 'control' attribute.
    // the control attribute has : dirty (if the value was change) / pristine (opposite dirty), valid / invalid , errors, touched (focus) / untouched, value etc.


   }

   submit(f){
    console.log(f);
    console.log(f.value.comment);
    console.log(f.value.contact.firstName);
  }
  
  

}

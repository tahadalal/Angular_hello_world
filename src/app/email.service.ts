import { Injectable } from '@angular/core';
// created using the cli command : "ng g s email"
@Injectable({ // This decorator is to tell angular that this class has injectable classes (services).
  // If the constructor has an argument, the decorator injectable is required.
  // The component decorator internally has the injectable decorator.
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}

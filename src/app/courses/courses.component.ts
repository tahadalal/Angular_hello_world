import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({ // these '@' are called decorators in angular.
  selector: 'app-courses', // this translates to the tag <app-courses> in html
  // for <div class="courses">, the selector would be '.courses'
  // for <div id="courses">, the selector would be '#courses'
  // templateUrl: './courses.component.html', // Use templateUrl for an external HTML file
  // This is the template that would be rendered under the app-courses tag
  // use 'templateUrl' if the number of lines of code is more than 5 lines, else use 'template'
  template : `
  <h2>{{ title }}</h2>
  <h2 [textContent]="title" ></h2>
  <h2>{{ courses.length + title}}</h2> <!-- Using property binding is good for non text fields because the syntax is simpler (but not for text) -->
  <ul>

  <ul>
    <li *ngFor="let course of courses" >
      {{ course }}
    </li> <!-- A directive is used to manipulate HTML DOM elements. It should be used like an attribute in HTML -->
    <!-- If a directive is used to modify the structure of a DOM element , it should be prefixed by an asterisk  -->
  </ul>
  
  <img src="{{ imageUrl }}" /> <!-- This is called string interpolation -->
  <img [src]="imageUrl" />  <!-- This is called property binding. Here the src property is bound with the imageUrl field of the Courses component. --> 

  <!-- property binding is ONE WAY . i.e. from component to the DOM. Changes from the DOM done reflect on the Component field.-->

  <table>
    <tr>
      <!-- <td [colspan]="colSpan"> --> <!-- this gives the error "Can't bind to 'colspan' since it isn't a known property of 'td'"-->
      <!-- the colspan is not a DOM property , it is an HTML attribute -->
      
      <td [attr.colspan]="colSpan"> <!-- this way angular knows that we are targeting the HTML attribute--> 

      </td> 
    </tr>
  </table>
  
  <button class="btn btn-primary" [class.active]="isActive">Save</button> 
  <!-- this is called class binding. -->
  <!-- notice that the static classes and the conditional classes (class bindings) can co-exist -->
  <!-- Can also use [class]="isActive" -->
  <!-- Can also use [class.someClassName]="!isActive" -->
  <!-- How can NgClass be used here ?  https://fidelity.udemy.com/course/angular-crash-course/learn/practice/4214/give-feedback#overview -->
  <!-- Check out https://angular.io/api/common/NgClass#description -->

  <button [style.backgroundColor]="isActive ? 'blue' : 'white' " >Submit</button>
  <!-- This is called style binding-->
  <!-- All the style properties are at : https://www.w3schools.com/jsref/dom_obj_style.asp -->
  

  <div (click)="onEvent($event)">
    <button (click)="onEvent($event)">Event</button>
  </div>
  <!-- This is called event binding -->
  <!-- Event Bubbling : A DOM event is triggered all the way up, till the root. This is DOM behavior . But an event hadler can restrict it from going up -->


  <input (keyup)="onKeyUp($event)" /> <!-- This is the old way of doing it -->
  <input #email (keyup.enter)="onEnter(email.value)" /> <!-- This is the angular way of doing it -->
  <!-- this is called template variable -->

  <!-- property binging uses round brackets '()' but event binding uses square binding '[]' -->

  <br/>
  <input [value]="email1" (keyup.enter)="email1=$event.target.value; onEmail1()" />
  <!-- Data binding is one way (from component to DOM, hence, we have to explicitly set the value of the attribute )-->

  <br/>
  <input [(ngModel)]="email2" (keyup.enter)="onEmail2()" />
  <!-- this allows 2 way binding . syntax "[()]" is called banana in a box -->
  <!-- The NgModel is present only in the angular forms class. Hence, it needs to be imported in the module -->

  <br/>
  <!-- Pipes : these allow for data formatting eg : uppercase, lowercase, number, currency, percent-->
  {{ course1.title | uppercase | lowercase}} <br/>
  {{ course1.rating | number:'1.2-2' }} <br/> <!-- format is '<number_of_integer_digits>.<min_number_of_decimals>-<max_number_of_decimals>' -->
  {{ course1.rating | number:'1.1-1' }} <br/>
  {{ course1.rating | number:'2.2-2' }} <br/>
  {{ course1.rating | number:'0.1-1' }} <br/> <!-- Note that the integer is not reduced inspite of the 0 -->
  {{ course1.students | number }} <br/>
  {{ course1.price | currency:'AUD':'symbol':'3.2-2' }} <br/>
  {{ course1.releaseDate | date:'shortDate' }} <br/> <!-- All date formats are at https://angular.io/api/common/DatePipe -->

  <!-- Custom Pipe -->
  {{ text | summary:'20':true }} 
  `, /* Using a backtick (`) allows multi-line templates inside the ts file */
  styleUrls: ['./courses.component.css']
})

/*
Component:
1. create the component : 'ng g c courses' - not sure why ng cli prefixes the 'app-' before the component name.
2. Register it in the module "app.module".
3. Add an element in an HTML markup. 

If the component name has more one word, then use hyphen to join the words like 'course-form'. 

*/
export class CoursesComponent implements OnInit {
  title = " List of Authors";
  courses : Array<string>;
  imageUrl = "https://images.unsplash.com/photo-1570648751440-2de46c45bfbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80";
  colSpan = 2;
  isActive = true; // this dictates if the class should be applied or not
  email1 = "someEmail";
  email2 = "someEmail2";
  course1 = {
    title : "The Complete",
    rating : 4.7654,
    students : 30123,
    price : 190.95,
    releaseDate : new Date(2016, 3, 1)
  };
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  getTitle(){
    return this.title;
  }
  
  constructor(service : CoursesService) {  // This is where the object is initialized
    // Passing an argument to the constructor delegates the responsibilty of creating a service to angular. 
    // This is called a dependency injection of the service into the component.And this component is now dependent on the service.
    

    // let service = new CoursesService(); // this tightly couples the component and the service. Not a good practice.
    // Instead of creating this Service ourself, we can let angular create ot for us. This way this code can be tested as well.
    this.courses = service.getCourses();
    this.title = this.courses.length.toString() + this.title;
  }

  ngOnInit() {
  }

  onEvent($event){
    console.log("button clicked", $event);
    $event.stopPropagation();
  }
  onKeyUp($event){
    if($event.keyCode === 13 ) console.log("Enter was pressed", $event.target.value);
  }
  onEnter(email){
    console.log("ENTER was pressed", email); 
  }

  onEmail1(){
    console.log(this.email1);
    this.email1 = this.email1+"--";
  }

  onEmail2(){
    console.log(this.email2);
  }

}

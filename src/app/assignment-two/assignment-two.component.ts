import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-assignment-two',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.css'],
  styles:[`.glyphicon {
    color: green;
}`], // This is an alternate way to declare the style
  // Angular always applies only one approach of style even if there are multiple declarations of styles.
  
  // encapsulation : ViewEncapsulation.Emulated // Emulated is the default encapsulation.
  // With Emulated, the HTML head tag would have an additional attribute for each DOM element specified in the style.eg : _ngcontent-hru-c1  
  
  // encapsulation : ViewEncapsulation.Native // This uses shadow DOM. With this, the DOM will not import any style from the parent.

  // encapsulation : ViewEncapsulation.None

  // an alternate way of declaring the input component (@Input()) is by using below line
  // ,inputs: ['isActive'] // but in this approach , one would have to take care during renaming.
})
// This component was generated using the command : ng g c assignment-two
export class AssignmentTwoComponent implements OnInit {
  @Input('is-active') isActive : boolean; // this is false by default
  // the alias 'is-active' is optional. an alias is prefered because the contract with the html is stable in this approach 
  // if there is no alias, you could use 'isActive' in the html
  @Output('change') click = new EventEmitter();
  // How to do this with SVG / images ? : https://fidelity.udemy.com/course/angular-crash-course/learn/practice/4214/give-feedback#overview 
  
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isActive = !this.isActive; // simple toggle
    // console.log("favourite button is "+this.isActive);
    let event = new FavouriteChangedEventArgs(this.isActive);
    this.click.emit(event); // This explicit emit is required for the change event to be correctly emitted.
  }

}

export class FavouriteChangedEventArgs {
  newValue : boolean;
  constructor(newValue : boolean) {
    this.newValue = newValue;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {
  form = new FormGroup({
    topics : new FormArray([])
  });

  addTopic(topic : HTMLInputElement){
    console.log("adding topic");
    // using the HTMLInputElement helps to see all the properties in an HTML input tag 
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  remove(topic : FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }

  constructor() { }

  ngOnInit() {
  }

}

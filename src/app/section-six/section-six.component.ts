import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './section-six.component.html',
  styleUrls: ['./section-six.component.css']
})
export class SectionSixComponent implements OnInit {
// This section is for directives
// There are 2 types of directives : Structural, Attribute
// Structural directive require a * before the directive. eg : *ngFor

  courses = [1,2];
  viewMode = 'map' ; // This holds the value of the active view : eg 'map' or 'list'
  courses2 = [
  { id : 1, name : 'course 1 ' },
  { id : 2, name : 'course 2 ' },
  { id : 3, name : 'course 3 ' }

  ];
  courses3 ;
  isActive = false;

  canSave = true;

  task={
    title : "Review applications",
    assignee : null
  };

  onAdd(){
    this.courses2.push({id : 4 , name : "course 4 "});
  }
  onRemove(course){
    let index = this.courses2.indexOf(course);
    this.courses2.splice(index, 1);
  }

  onChange(course){
    course.name = "UPDATED";
  }
  loadCourses(){
    this.courses3 = [
      { id : 1, name : 'course 1 ' },
      { id : 2, name : 'course 2 ' },
      { id : 3, name : 'course 3 ' }
    
      ];
  }
  trackCourse(index, course){
    return course ? course.id : undefined;
  }
  onClick(){
    this.isActive = !this.isActive;
  }

  constructor() { }

  ngOnInit() {
  }

}

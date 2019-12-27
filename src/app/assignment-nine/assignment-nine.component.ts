import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './assignment-nine.component.html',
  styleUrls: ['./assignment-nine.component.css']
})
export class AssignmentNineComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    console.log('AssignmentNineComponent ngOnInit');
    this.route.queryParamMap
      .subscribe()
  }

}

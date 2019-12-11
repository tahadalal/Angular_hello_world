import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit { // this was created using the command "ng g c like"
  @Input('likesCount') likesCount : number;
  @Input('isActive') isActive : boolean;

  @Output('click')  click = new EventEmitter();

  onClick($event){
    this.click.emit(this.isActive);
    this.isActive = !this.isActive;
    $event.stopPropagation();

  }

  constructor() { }

  ngOnInit() {
  }

}

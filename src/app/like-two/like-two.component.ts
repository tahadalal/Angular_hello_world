import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like-two',
  templateUrl: './like-two.component.html',
  styleUrls: ['./like-two.component.css']
})
export class LikeTwoComponent implements OnInit {
  @Input() isActive : boolean;
  @Input() likesCount : number;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    
    this.isActive = !this.isActive;

    this.likesCount += this.isActive ? -1 : 1;
  }

}

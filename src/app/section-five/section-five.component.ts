import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from '../assignment-two/assignment-two.component';

@Component({
  selector: 'app-root',
  templateUrl: './section-five.component.html',
  styleUrls: ['./section-five.component.css']  
})
export class SectionFiveComponent  {
  post={
    title:"Some title",
    isFavourite:true
  }
  tweet={
    text : "Somw Tweet",
    likesCount : 5,
    isLiked : false
  }
  onFavouriteChange(eventArg : FavouriteChangedEventArgs ){
    console.log("Favourite changed "+eventArg['newValue']);
    
  }
  onClick(isActive:boolean){
    console.log("count "+this.tweet.likesCount+" active " + isActive);
    console.log(isActive);
    if(isActive) {this.tweet.likesCount--;}
    else {this.tweet.likesCount++;}
  }
  

  title = 'hello-world';

}

import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../app.error';
import { NotFoundError } from '../not-found-error';
import { BadInput } from '../bad-input';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any[];

  ngOnInit(): void {
    // Use ngOnInit (and not the constructor) for intialization of the component 
    this.service.getPosts().subscribe(
        response => this.posts = response // the response object is a JSON by default .
      
      // ,
      // error => {
      //   alert('An unexpected error occurred.')
      //   console.log(error);}
      // The above commented code is no longer needed because the the ErrorHandler is replaced with the AppErrorHandler in the app module.

      )
  }
  
  
  constructor(private service : PostService) {
    // the constructor is used to declare the injections
  }

  
  createPost(input : HTMLInputElement){
    let post = {
      title : input.value 
    };
    this.posts.splice(0,0,post); // placing this line here is an optimistic outlook to updates.
    // optimistic outlook updates the UI first and then makes the REST call.
    // if the optimistic call fails then the UI will have to be reverted.
    // pessimstic outlook makes the REST call and then updates the UI.
    // optimistic means that the call will hopefully pass.
    // pessimistic means that the call will hopefully fail.
    
    input.value = '';
    this.service.postPosts(post)
      .subscribe(
        newPost => {
          console.log(newPost);
          // post.id = JSON.parse(JSON.stringify(response)).id; // This gives a compilation error because 'post' does not have a property called 'id'
          // the other way around this is to set the type of the post variable to 'any' .
          post['id'] = newPost.id;
          console.log(post);
        },(error : Response) => {
          // for a pessimistic outlook, the UI is updated here
          // this.posts.splice(0,0,post);
          // for an optimistic outlook, the UI is reverted if the REST call fails
          this.posts.splice(0,1);

          if(error instanceof BadInput){
            // this.form.setErrors(error.json()) // This can be used if there are forms on the page !!
            console.log('invalid data' + error.originalError);
          }
          else throw error;
        }  
      )
  }

  updatePost(post){
    this.service.patchPosts(post)
    .subscribe(
      updatedPost => {
        console.log(updatedPost);
      }
      // ,error => {
      //   alert('An unexpected error occurred.')
      //   console.log(error);
      // }
      // The AppErrorHandler will hanlde this
    );
    // 'patch' is used to update just a few elements rather than the entire data. 
    // For 'patch', only the updated fields are sent. but for put, the entire object is sent.
    // Alternatively, use : this.http.put(this.url,JSON.stringify(post));
  }

  deletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.deletePosts(post.id)
    .subscribe(
      // () => {} // for a lambda without parameters, leave the paranthesis empty
      null
    ,(error : AppError )=> {
      this.posts.splice(index,0, post);
      if (error instanceof NotFoundError)
        console.log('This post has already been deleted');
      else throw error;
    })
  }

  // Observables vs Promises
  // Observables are lazy - nothing happens until you sunbscribe to them
  // Promises are eager - it is execute as soon as it is called.
  // Observables can be converted to promises
  // give preference to observables over promises
  //  
}

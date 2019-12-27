import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/retry';
import { throwError, Observable } from 'rxjs';
// to use the rxjs throw, you need the rxjs-compat . command "sudo npm install rxjs-compat --save"
// to uninstall : sudo npm uninstall rxjs-compat --save
// import 'rxjs/add/observable/throw'
import { AppError } from '../app.error';
import { NotFoundError } from '../not-found-error';
import { BadInput } from '../bad-input';
// use command "npm list rxjs" to get the version of the installed npm package
// for global packages use "npm list -g rxjs"

@Injectable({
  providedIn: 'root'
})
// generated using the command : ng g s post
// Was manually moved to the folder 'services'
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http : HttpClient) { } 

  getPosts(){
    return this.http.get(this.url)
    .pipe(map(response => response as any[]))
    .pipe(catchError(this.handleError));
  }

  postPosts(post){
    // return throwError(new AppError()); // Use this to simulate an error
    return this.http.post(this.url,JSON.stringify(post))
      .pipe(map(response => JSON.parse(JSON.stringify(response))))
      .pipe(catchError(this.handleError));
  }

  patchPosts(post){
    return this.http.patch(this.url+'/'+post.id,{isRead : true})
    .pipe(catchError(this.handleError));
  }

  deletePosts(id){
    return this.http.delete(this.url+'fail/'+id)
      .pipe(catchError(this.handleError));
      // .retry(3) /// Used for retying an observable
      // .toPromise(); // Can be used to convert an observable to a promise 
  }

  private handleError(error : Response){
    if (error.status === 400)
      return throwError(new BadInput(error.json()));
    if (error.status === 404)
      return throwError(new NotFoundError());
    return throwError(new AppError(error));
  }
}

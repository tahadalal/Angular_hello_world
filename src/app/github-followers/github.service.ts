import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BadInput } from '../bad-input';
import { NotFoundError } from '../not-found-error';
import { AppError } from '../app.error';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class GithubService {
    url = "https://api.github.com/users/mosh-hamedani/followers"; // more details at https://developer.github.com/v3/users/
    
    constructor(
        private http : HttpClient
        ) {
        
    }

    getFollowers(){
        return this.http.get(this.url)
            .pipe(catchError(this.handleError));
    }

    private handleError(error : Response){
    if (error.status === 400)
        return throwError(new BadInput(error.json()));
    if (error.status === 404)
        return throwError(new NotFoundError());
    return throwError(new AppError(error));
    }
}
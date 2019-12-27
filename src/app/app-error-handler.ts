import { ErrorHandler } from '@angular/core';

export class AppErrorHanlder extends ErrorHandler {

    handleError(error){
        alert('An unexpected error occurred.')
        console.log(error);
    }
}
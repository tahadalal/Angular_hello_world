import { AbstractControl, ValidationErrors } from '@angular/forms';
import { reject } from 'q';

// This file can be placed in a common folder instead.
// https://angular.io/api/forms/ValidatorFn
export class UserNameValidators{
    // static method
    static cannotContainSpace (control : AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return {cannotContainSpace : true};
            // The implementation of th minlength control is like below
            // return { minlength : {
            //     requiredLength : 10,
            //     actualLength : control.value.length
            // }}
        return null;

    }

    // This method is used to explain that a ValidationFunction cant be used for async validation. 
    // For async validation, use AsyncValidationFn 
    static shouldBeUnique(control : AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject)=>{
            // resolve is used to return a response to the caller
            // reject is used to return a failure to the caller.
            
            // setTimeout is an async operation
            // setTimeout is used to simulate an asynchrounous operation.
            setTimeout(() => {
                console.log('ok');
                if (control.value === 'taha')
                    resolve({shouldBeUnique : true});
                else
                    resolve(null);
            },1000);
        });
    }
}
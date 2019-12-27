import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator{

    static invalidOldPassword (control : AbstractControl) : Promise<ValidationErrors | null>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // console.log("checking uniqueness of password ",control.value);
                if(control.value === "123") 
                    resolve(null);
                else
                    resolve({invalidOldPassword : true}); 
            },1000);
        });

        
    }

    static passwordShouldMatch(control : AbstractControl) : ValidationErrors | null {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
    
        if (confirmPassword.value !== newPassword.value) 
          return {passwordShouldMatch : true};
        else
          return null;
      }

}
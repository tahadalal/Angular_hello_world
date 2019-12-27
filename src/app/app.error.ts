// This class acts like the application's exception class
// All errors / exceptions would be sent via this class
// This is a custom exception class
export class AppError {
    constructor( public originalError?: any){

    }
}
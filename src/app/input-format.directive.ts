import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
// This custom directive was created using the command : ng g d input-format 
export class InputFormatDirective {
  // @Input('format') format; // A cleaner approach of doing this is as below
  @Input('appInputFormat') format;


  constructor(private el : ElementRef) { }
  
  // @HostListener('focus') onFocus(){
  //   console.log("on focus");
  // }



  @HostListener('blur') onBlur(){
    console.log("on blur");
    let value : string = this.el.nativeElement.value;
    if (this.format == 'lowercase') this.el.nativeElement.value = value.toLowerCase();
    else this.el.nativeElement.value = value.toUpperCase();
  }

  

}

import { Pipe, PipeTransform } from '@angular/core';
import { isString } from 'util';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {
  prepositions = ["and", "the"];
  transform(value: string): string {
    if (!value) return null;
    let words : string[] = value.split(' ') ;
    console.log(words);
    for(let i=0 ; i<words.length;i++){
      if( isString(words[i])){
        let temp = words[i].substring(0,1).toUpperCase();
        temp += words[i].substring(1).toLowerCase();
        words[i] = temp;
      }
    }
    
    return words.join(' ');
  }

}

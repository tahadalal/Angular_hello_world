import {Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"summary"
})
// Pipes also should be registered in the NgModule
export class SummaryPipe implements PipeTransform{ // https://angular.io/api/core/PipeTransform
    transform(value: string, limit?: number, capitalize?: boolean): any{
        if (!value) 
            return null;

        let actualLimit = (limit) ? limit : 50;
        if (capitalize)
            return value.substr(0,actualLimit).toUpperCase() + '...';
        return value.substr(0,actualLimit) + '...';

    }
}
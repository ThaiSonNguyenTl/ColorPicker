import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

  transform(arrNumber: number[], sortValue : number): any {
    if(sortValue === 1){
      var result = arrNumber.sort((a,b) => a-b)
    }else{
      var result =  arrNumber.sort((a,b) => b-a)
    }
    return [...result]
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(mNames:any,term:any): any {
    
    if(term === undefined) return mNames;
    console.log(mNames)
    return mNames.filter(function(mNs){
      return mNs.Title.toLowerCase().includes(term.toLowerCase());
    })
    

}
}

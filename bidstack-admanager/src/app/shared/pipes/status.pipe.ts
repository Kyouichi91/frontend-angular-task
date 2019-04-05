import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(companies: any[], status: boolean, array:string) {
    if (array) {
      let viewCompanies = [];
      let pos=0;
      for(let company of companies){
        if (status) {
          if (company.active) {
            viewCompanies[pos] = company.title;
            pos++;
          }
        } else {
          if (!company.active) {
            viewCompanies[pos] = company.title;
            pos++;
          }
        }
      }
      return viewCompanies;
    } else {
      let count:number=0;
      for (let company of companies){
        if (status) {
          if(company.active){
            count++;
          }
        } else {
          if(!company.active){
            count++;
          }
        }
      }
      return count;
    }
  }
}

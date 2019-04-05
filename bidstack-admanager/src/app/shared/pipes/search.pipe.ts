import { Pipe, PipeTransform } from '@angular/core';
import { Company } from '../interfaces/company';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(companies: Company[], searchValue: string): Company[] {
    if (!searchValue) {
      return companies;
    }
    return companies.filter(company => company.company_name.toLowerCase().indexOf(searchValue.toLowerCase()) !==-1);
  }

}

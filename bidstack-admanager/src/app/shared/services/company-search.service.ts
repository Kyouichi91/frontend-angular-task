import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanySearchService {

  public searchCompany= new Subject<any>();

  sendSearchVal(searchVal) {
    this.searchCompany.next(searchVal);
  }
  constructor() {

  }

}

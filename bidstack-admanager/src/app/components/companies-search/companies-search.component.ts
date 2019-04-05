import { Component, OnInit} from '@angular/core';
import { CompanySearchService } from '../../shared/services/company-search.service';


@Component({
  selector: 'app-companies-search',
  templateUrl: './companies-search.component.html',
  styleUrls: ['./companies-search.component.scss']
})
export class CompaniesSearchComponent implements OnInit {

  constructor(
    private searchdata: CompanySearchService,
  ) { }

  onSearchChange(searchValue) {
    this.searchdata.sendSearchVal(searchValue);
  }

  ngOnInit() {
  }

}

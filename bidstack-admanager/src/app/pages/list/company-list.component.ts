import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../shared/services/companies.service';
import { CompanySearchService } from '../../shared/services/company-search.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit{

  searchValue:string;
  companies;
  constructor(
    private companiesdata:CompaniesService,
    private router: Router,
    private searchdata:CompanySearchService
  ) {
      this.companies=this.companiesdata.getCompanies();
   }

  ngOnInit() {
    this.searchdata.searchCompany.subscribe((data)=>
    {
      this.searchValue=data;
    })

  }
  onSelect(company){
     this.router.navigate(['/company', company.company_name]);
     this.companiesdata.company=company;
  }

}

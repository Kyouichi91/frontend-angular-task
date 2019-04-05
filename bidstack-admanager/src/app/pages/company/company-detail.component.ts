import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../shared/services/companies.service';
import { Company } from '../../shared/interfaces/company';
import { StatusPipe } from '../../shared/pipes/status.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {
  company:Company;
  constructor(
    private companiesdata:CompaniesService,
    private router: Router
  ) { }

  ngOnInit() {
      this.company = this.companiesdata.company;
  }
  toListClick(){
    this.router.navigate(['/list']);
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyCardComponent } from './components/company-card/company-card.component';
import { AddCompanyButtonComponent } from './components/add-company-button/add-company-button.component';
import { CompaniesSearchComponent } from './components/companies-search/companies-search.component';

import { CompaniesService } from './shared/services/companies.service'
import { CompanySearchService } from './shared/services/company-search.service'
import { StatusPipe } from './shared/pipes/status.pipe';
import { SearchPipe } from './shared/pipes/search.pipe';
import { ViewDirective } from './shared/directives/view.directive';
import { CompanyListComponent } from './pages/list/company-list.component';
import { CompanyDetailComponent } from './pages/company/company-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyCardComponent,
    AddCompanyButtonComponent,
    CompaniesSearchComponent,
    StatusPipe,
    SearchPipe,
    ViewDirective,
    CompanyListComponent,
    CompanyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CompaniesService,CompanySearchService],
  bootstrap: [AppComponent],
  exports: [CompanyCardComponent,AddCompanyButtonComponent, CompaniesSearchComponent, CompanyListComponent, CompanyDetailComponent]
})
export class AppModule { }

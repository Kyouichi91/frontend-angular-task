import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesSearchComponent } from './companies-search.component';

@NgModule({
  declarations: [CompaniesSearchComponent],
  imports: [
    CommonModule
  ],
  exports: [CompaniesSearchComponent]
})
export class CompaniesSearchModule { }

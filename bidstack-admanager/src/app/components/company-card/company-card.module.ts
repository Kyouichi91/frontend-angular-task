import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyCardComponent } from './company-card.component';




@NgModule({
  declarations: [CompanyCardComponent],
  imports: [CommonModule],
  providers: [],
  exports: [CompanyCardComponent]
})
export class CompanyCardModule { }

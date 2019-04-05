import { Component, OnInit, Input} from '@angular/core';
import { StatusPipe } from '../../shared/pipes/status.pipe';


@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss'],
})
export class CompanyCardComponent implements OnInit{

  constructor() { }

  @Input() data;
  nameActiveClass:boolean=false;
  cardActiveClass:boolean=false;

  isActive(){
    this.nameActiveClass=!this.nameActiveClass;
  }

  ngOnInit() {
    if (this.data.active_games.length > 0 ) {
      this.cardActiveClass=true;
    }
  }
  
}

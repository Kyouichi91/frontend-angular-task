import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../shared/services/companies.service'

@Component({
  selector: 'app-add-company-button',
  templateUrl: './add-company-button.component.html',
  styleUrls: ['./add-company-button.component.scss']
})
export class AddCompanyButtonComponent implements OnInit {
  btnActive:boolean=false;
  constructor(private companiesdata:CompaniesService) { }

      company_items = [
      {
       company_name: 'PHD',
       logo: 'https://www.xing.com/img/custom/cp/assets/logo/6/8/0/59008/square_128px/PHD_MLogo_RGB_P_300dpi.jpg',
       companies: [
         {title: 'BooHoo Man Q1 19', active: true},
         {title: 'Sky Digital Wifi Q1 19', active: false},
         {title: 'Heineken UK Q1 19', active: false},
       ],
       active_games: ['Dirt', 'NFS', 'Drag']
     },

     {
      company_name: 'OMD',
      logo: 'https://media.licdn.com/dms/image/C560BAQGMacVHAc-eSA/company-logo_200_200/0?e=2159024400&v=beta&t=WR3vuwTsOcoSqq0t5X_dcnP-St50P0UKvUqPIknFvKE',
      companies: [
        {title: 'BooHoo Man Q1 19', active: true},
        {title: 'Sky Digital Wifi Q1 19', active: false},
        {title: 'Heineken UK Q1 19', active: false},
        {title: 'MG Cars Q1 19', active: false},
      ],
      active_games: ['Dirt', 'NFS', 'Drag','Football manager 2019']
    },
    {
     company_name: 'Mindshare',
     logo: 'https://pbs.twimg.com/profile_images/687163978292723717/IoG7pW2O_400x400.png',
     companies: [
       {title: 'BooHoo Man Q1 19', active: true},
       {title: 'MG Cars Q1 19', active: true},
       {title: 'Sky Digital Wifi Q1 19', active: false},
       {title: 'Heineken UK Q1 19', active: false},
       {title: '118 Bet China Q1 19', active: true}
     ],
     active_games: ['Football manager 2019']
    },
    {
     company_name: 'Blue 499',
     logo: 'https://www.zenithmedia.com/wp-content/uploads/2015/03/Thumbnail.png',
     companies: [
       {title: 'BooHoo Man Q1 19', active: true},
       {title: 'Sky Digital Wifi Q1 19', active: true},
       {title: 'Heineken UK Q1 19', active: true},
       {title: '118 Bet China Q1 19', active: true}
     ],
     active_games: []
    },
    {
     company_name: 'Zenith',
     logo: 'https://yt3.ggpht.com/a-/AN66SAw0-6QGpGZ9sE7cOxQ9LuzTZt62UVkKADJd8Q=s900-mo-c-c0xffffffff-rj-k-no',
     companies: [
       {title: 'BooHoo Man Q1 19', active: false},
       {title: 'Sky Digital Wifi Q1 19', active: false},
       {title: 'Heineken UK Q1 19', active: false},
       {title: '118 Bet China Q1 19', active: false}
     ],
     active_games: []
    }
      ];
addClick() {
    let company_item = this.company_items[Math.floor(Math.random()*this.company_items.length)];
    this.companiesdata.getCompanies().push(company_item);
  }

  ngOnInit() {
  }

}

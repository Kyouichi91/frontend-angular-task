import { Injectable } from '@angular/core';
import { Company } from '../interfaces/company';
@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  public company:Company;
  public companies: Company[] = [
   {
     company_name: 'Carat',
     logo: 'https://logo.clearbit.com/carat.nl',
     companies: [
       {title: 'Coca-Cola PopFizz Q1 19', active: true},
       {title: 'Sky Digital Wifi Q1 19', active: false},
       {title: 'BooHoo Man Q1 19', active: true},
       {title: 'Heineken UK Q1 19', active: false},
       {title: 'MG Cars Q1 19', active: false},
       {title: '118 Bet China Q1 19', active: true}
       ],
     active_games: ['Football manager 2019', 'Dirt', 'Football manager 2018']
   },
   {
     company_name: 'Mediacom',
     logo: 'https://pbs.twimg.com/profile_images/761499256121417728/jhiIFgNh_400x400.jpg',
     companies: [
       {title: 'Coca-Cola PopFizz Q1 19', active: true},
       {title: 'Sky Digital Wifi Q1 19', active: false},
       {title: 'BooHoo Man Q1 19', active: true},
       {title: 'Sky Digital Wifi Q1 19', active: false},
       {title: 'Heineken UK Q1 19', active: false},
       {title: '118 Bet China Q1 19', active: true},
       {title: 'MG Cars Q1 19', active: true}
     ],
     active_games: ['Football manager 2019']
   },
   {
     company_name: 'The Audience Store',
     logo: 'https://pbs.twimg.com/profile_images/725709645122289664/s-0ez1Hw_400x400.jpg',
     companies: [
       {title: 'BooHoo Man Q1 19', active: true},
       {title: 'Sky Digital Wifi Q1 19', active: false},
       {title: 'Heineken UK Q1 19', active: false},
     ],
     active_games: ['Dirt', 'NFS', 'Drag']
   },
  ];
  getCompanies() {
    return this.companies;
  }

  constructor() { }
}

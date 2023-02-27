import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
 
 
  menuArray =[
    {
      menuLink: '#',
      menuTitle: 'About us'
    },
    {
      menuLink: '#',
      menuTitle: 'Our Portfolio'
    },
    {
      menuLink: '#',
      menuTitle: 'Vacancy'
    },
    {
      menuLink: '#',
      menuTitle: 'Investors'
    },
    {
      menuLink: '#',
      menuTitle: 'Careers'
    },
    {
      menuLink: '#',
      menuTitle: 'Press Office'
    },
    {
      menuLink: '#',
      menuTitle: 'ESG'
    },
    {
      menuLink: '#',
      menuTitle: 'Contact us'
    }
  ]
}

import { Component } from '@angular/core';

import { faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faYoutube = faYoutube;


  currentYear: number = new Date().getFullYear();

  footerLinkArray = [
    {
      title: 'Contact us',
      linkspath:[ 
        {  
        subTitle: 'Customer Care',
        link: '#',
        },
        {  
          subTitle: 'Whistle blowing',
          link: '#',
        },
        {  
          subTitle: 'Head Offices',
          link: '#',
        },
        {  
          subTitle: 'Regional Offices',
          link: '#',
        },
        {  
          subTitle: 'Company Information',
          link: '#',
        }
      ]
    },
    {
      title: 'Portals',
      linkspath:[ 
        {  
        subTitle: 'Brokers',
        link: '#',
        },
        {  
          subTitle: 'Tenant',
          link: '#',
        },
        {  
          subTitle: 'Investors',
          link: '#',
        },
        {  
          subTitle: 'Need space?',
          link: '#',
        },
        {  
          subTitle: 'Our Portfolio',
          link: '#',
        }
      ]
    },
    {
      title: 'Media',
      linkspath:[ 
        {  
        subTitle: 'Press releases',
        link: '#',
        },
        {  
          subTitle: 'Press archive',
          link: '#',
        },
        {  
          subTitle: 'Media quries',
          link: '#',
        }
      ]
    },
    {
      title: 'Legals',
      linkspath:[ 
        {  
        subTitle: 'Terms of Use & Privacy Statement',
        link: '#',
        },
        {  
          subTitle: 'PAIA',
          link: '#',
        },
        {  
          subTitle: 'News',
          link: '#',
        }
      ]
    }
  ]
}

import { Component } from '@angular/core';
import { PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-similar-properties',
  templateUrl: './similar-properties.component.html',
  styleUrls: ['./similar-properties.component.css']
})
export class SimilarPropertiesComponent {
  images: any; 
    responsiveOptions;
    

    constructor() {
        this.responsiveOptions = [{
            breakpoint: '1024px',
            numVisible: 1,
            numScroll: 3
        }];
    }

    ngOnInit(): void {
        this.images = [
            {random: 'Genie Property', picture: 'assets/slider/image1.jpg'},
            {random: 'Estate Guardian', picture: 'assets/slider/image2.jpg'},
            {random: 'Homeland', picture: 'assets/slider/image3.jpg'},
            {random: 'Prime Villas', picture: 'assets/slider/image4.jpg'},
            {random: 'City Homes', picture: 'assets/slider/image5.jpg'},
            {random: 'Watchtower', picture: 'assets/slider/image6.jpg'}
        ];
    }

    
  
}

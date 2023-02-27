import { Component } from '@angular/core';


@Component({
  selector: 'app-content-info',
  templateUrl: './content-info.component.html',
  styleUrls: ['./content-info.component.css']
})
export class ContentInfoComponent {

  tabs: string[] = ['Description', 'Avalilable Units', 'Location', 'Video', 'Rate Card', 'Brochure'];

  activatedTabIndex: number = 0;
  tabChange(tabIndex: number){
    this.activatedTabIndex = tabIndex;
  }

}

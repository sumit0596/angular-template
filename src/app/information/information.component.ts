import { Component } from '@angular/core';
import { faPhone, faEnvelope, faMessage} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faMessage = faMessage;
}

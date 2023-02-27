import { Component } from '@angular/core';
import { faPhone, faEnvelope, faMessage} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faMessage = faMessage;

  userData = [
    {
      name: 'Lisa Holburn',
      phone: '0123 456 789',
      email: 'xyz@gmail.com',
      imgUrl: '/assets/profile/profile.jpg'
    }
  ]
}
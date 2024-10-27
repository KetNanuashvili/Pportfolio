import { Component } from '@angular/core';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  linkedin = faLinkedin;
  envelope = faEnvelope;
  phone = faPhone;
  facebook = faFacebook;
}

import { Component } from '@angular/core';
import { freeSet } from '@coreui/icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  icons = freeSet ;

}

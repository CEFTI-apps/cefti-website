import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BetaBadgeComponent } from '../../../components/beta-badge/beta-badge';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
   open = false;
   dropdown = false;
}

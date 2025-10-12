import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './explore-card.html',
  styleUrl: './explore-card.scss'
})
export class ExploreCard {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() imageAlt: string = '';
}

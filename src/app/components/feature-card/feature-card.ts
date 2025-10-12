import { Component, Input } from '@angular/core';
import { FaIconComponent, IconDefinition } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.scss'
})
export class FeatureCard {
  @Input() icon!: IconDefinition;     // nom d’icône (par ex. "fa-solid fa-users")
  @Input() title: string = '';
  @Input() description: string = '';
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHero, type Breadcrumb } from '../../../shared/components/page-hero/page-hero';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-nos-batiments',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHero, RevealOnScrollDirective],
  templateUrl: './nos-batiments.component.html',
  styleUrl: './nos-batiments.component.scss',
})
export class NosBatimentsComponent {
  readonly breadcrumbs: Breadcrumb[] = [
    { label: 'Découvrez le CEFTI', link: '/decouvrez/mot-fondateur' },
    { label: 'Nos Bâtiments' },
  ];

  readonly espaces = [
    { label: 'Bâtiment Principal', gradient: 'linear-gradient(135deg, var(--encre, #08272c), var(--petrole-2, #0b454c))' },
    { label: 'Salles de Cours', gradient: 'linear-gradient(135deg, var(--petrole-2, #0b454c), var(--petrole, #0e5a63))' },
    { label: 'Espaces Communs', gradient: 'linear-gradient(135deg, var(--petrole, #0e5a63), #0a4850)' },
  ];
}

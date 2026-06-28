import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHero, type Breadcrumb } from '../../../shared/components/page-hero/page-hero';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-mot-fondateur',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHero, RevealOnScrollDirective],
  templateUrl: './mot-fondateur.component.html',
  styleUrl: './mot-fondateur.component.scss',
})
export class MotFondateurComponent {
  readonly breadcrumbs: Breadcrumb[] = [
    { label: 'Découvrez le CEFTI', link: '/decouvrez/mot-fondateur' },
    { label: 'Mot du Président Fondateur' },
  ];
}

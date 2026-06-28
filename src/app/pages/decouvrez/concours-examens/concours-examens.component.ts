import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero, type Breadcrumb } from '../../../shared/components/page-hero/page-hero';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-concours-examens',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHero, RevealOnScrollDirective, RouterLink],
  templateUrl: './concours-examens.component.html',
  styleUrl: './concours-examens.component.scss',
})
export class ConcoursExamensComponent {
  readonly breadcrumbs: Breadcrumb[] = [
    { label: 'Découvrez le CEFTI', link: '/decouvrez/mot-fondateur' },
    { label: 'Concours & Examens' },
  ];
}

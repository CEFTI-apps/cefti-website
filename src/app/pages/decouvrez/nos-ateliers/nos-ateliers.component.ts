import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHero, type Breadcrumb } from '../../../shared/components/page-hero/page-hero';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll';

interface Atelier {
  nom: string;
  image: string;
}

@Component({
  selector: 'app-nos-ateliers',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHero, RevealOnScrollDirective],
  templateUrl: './nos-ateliers.component.html',
  styleUrl: './nos-ateliers.component.scss',
})
export class NosAteliersComponent {
  readonly breadcrumbs: Breadcrumb[] = [
    { label: 'Découvrez le CEFTI', link: '/decouvrez/mot-fondateur' },
    { label: 'Nos Ateliers' },
  ];

  readonly ateliers: Atelier[] = [
    {
      nom: 'Atelier Chaudronnerie',
      image: 'https://collegecefti.com/wp-content/uploads/2024/02/metalique3-1-1024x676.jpeg',
    },
    {
      nom: 'Atelier Mécanique Automobile',
      image: 'https://collegecefti.com/wp-content/uploads/2024/02/mec-et-auto-1-1024x676.jpeg',
    },
    {
      nom: 'Atelier Froid & Climatisation',
      image: 'https://collegecefti.com/wp-content/uploads/2024/02/froid-et-clim-1-1024x676.jpeg',
    },
    {
      nom: 'Atelier Électricité',
      image: 'https://collegecefti.com/wp-content/uploads/2024/02/Formation-Professionelles-Eleq-1024x676.jpeg',
    },
    {
      nom: 'Atelier Menuiserie',
      image: 'https://collegecefti.com/wp-content/uploads/2024/02/ameublement-1-1024x676.jpeg',
    },
    {
      nom: 'Atelier Maçonnerie & Génie Civil',
      image: 'https://collegecefti.com/wp-content/uploads/2024/02/maconneri-1024x575.jpeg',
    },
    {
      nom: 'Atelier TI & Informatique',
      image: 'https://collegecefti.com/wp-content/uploads/2024/02/technologie-TI-1-1024x676.jpeg',
    },
    {
      nom: 'Atelier Électronique',
      image: 'https://collegecefti.com/wp-content/uploads/2024/02/electronique.jpeg',
    },
    {
      nom: 'Atelier Sciences de la Santé',
      image: 'https://collegecefti.com/wp-content/uploads/2024/02/science-et-tech-dela-sante3-1.jpeg',
    },
  ];
}

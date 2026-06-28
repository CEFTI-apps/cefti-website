import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHero, type Breadcrumb } from '../../../shared/components/page-hero/page-hero';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll';

interface MissionCard {
  icon: 'target' | 'eye' | 'shield' | 'quote';
  titre: string;
  contenu: string[];
  isList: boolean;
  slogan?: string;
}

@Component({
  selector: 'app-missions',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHero, RevealOnScrollDirective],
  templateUrl: './missions.component.html',
  styleUrl: './missions.component.scss',
})
export class MissionsComponent {
  readonly breadcrumbs: Breadcrumb[] = [
    { label: 'Découvrez le CEFTI', link: '/decouvrez/mot-fondateur' },
    { label: 'Missions, Visions, Valeurs' },
  ];

  readonly cards: MissionCard[] = [
    {
      icon: 'target',
      titre: 'Notre Mission',
      isList: true,
      contenu: [
        "Contribuer à l'effort du développement de notre pays en donnant une formation efficiente aux jeunes",
        "Réduire le taux de chômage via la formation professionnelle accélérée pour les jeunes d'au moins 17 ans sans qualification ni emploi",
        "Améliorer les aptitudes pratiques et développer des capacités d'auto-emploi",
        "Mettre à disposition du tissu industriel camerounais des hommes qualifiés",
      ],
    },
    {
      icon: 'eye',
      titre: 'Notre Vision',
      isList: false,
      contenu: [
        "Faire du CEFTI une destination sans faille pour une formation technique de qualité au Cameroun et dans la sous-région Afrique Centrale. Plusieurs laboratoires et ateliers au service des apprenants, des partenariats avec les entreprises pour les visites d'études, les stages et l'insertion après la formation.",
      ],
    },
    {
      icon: 'shield',
      titre: 'Nos Valeurs',
      isList: false,
      contenu: [
        "Excellence académique, formation professionnelle de qualité, innovation technologique, respect de la sécurité au travail, collaboration interdisciplinaire, développement durable et engagement envers la communauté industrielle.",
      ],
    },
    {
      icon: 'quote',
      titre: 'Notre Philosophie & Slogan',
      isList: false,
      contenu: [
        "Une formation de qualité pour un Avenir sûr.",
      ],
      slogan: "CEFTI, une École, un Métier, un Avenir sûr.",
    },
  ];
}

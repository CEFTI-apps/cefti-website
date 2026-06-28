import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHero, type Breadcrumb } from '../../../shared/components/page-hero/page-hero';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll';

interface Atout {
  icon: 'tools' | 'briefcase' | 'clipboard' | 'users' | 'link' | 'compass' | 'heart';
  titre: string;
  desc: string;
}

@Component({
  selector: 'app-nos-atouts',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHero, RevealOnScrollDirective],
  templateUrl: './nos-atouts.component.html',
  styleUrl: './nos-atouts.component.scss',
})
export class NosAtoutsComponent {
  readonly breadcrumbs: Breadcrumb[] = [
    { label: 'Découvrez le CEFTI', link: '/decouvrez/mot-fondateur' },
    { label: 'Nos Atouts' },
  ];

  readonly atouts: Atout[] = [
    {
      icon: 'tools',
      titre: 'Ateliers Bien Équipés',
      desc: "Nous investissons dans des ateliers modernes et parfaitement équipés pour garantir que votre expérience d'apprentissage soit pratique, pertinente et conforme aux normes professionnelles les plus élevées.",
    },
    {
      icon: 'briefcase',
      titre: 'Stages en Entreprise',
      desc: "Les apprenants bénéficient d'opportunités de stage en entreprise, offrant une immersion réelle dans le monde professionnel et développant des compétences pratiques.",
    },
    {
      icon: 'clipboard',
      titre: 'Préparation Efficace aux DQP',
      desc: "Préparation approfondie aux Diplômes de Qualification Professionnelle (DQP) délivrés par le MINEFOP ainsi qu'aux examens officiels.",
    },
    {
      icon: 'users',
      titre: 'Enseignants Expérimentés',
      desc: "Notre équipe pédagogique est composée d'enseignants expérimentés et dévoués, disponibles pour encadrer et guider chaque apprenant vers l'excellence.",
    },
    {
      icon: 'link',
      titre: 'Partenariats Stratégiques',
      desc: "Des partenariats solides avec des acteurs locaux et internationaux, dont l'ONG IECD (Institut Européen de Coopération et de Développement), renforcent la qualité de la formation avec les dernières technologies.",
    },
    {
      icon: 'compass',
      titre: "Accompagnement à l'Insertion Professionnelle",
      desc: "Nous accompagnons activement les jeunes vers une insertion socio-professionnelle réussie, avec des programmes et des conseils personnalisés.",
    },
    {
      icon: 'heart',
      titre: 'Valorisation de la Proximité avec les Parents',
      desc: "La collaboration avec les parents est essentielle. Notre engagement envers la transparence et la communication ouverte favorise un environnement où la réussite de chaque apprenant est une priorité partagée.",
    },
  ];
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHero, type Breadcrumb } from '../../../shared/components/page-hero/page-hero';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll';

interface EtapeTimeline {
  annee: string;
  titre: string;
  desc: string;
}

@Component({
  selector: 'app-historique',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHero, RevealOnScrollDirective],
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.scss',
})
export class HistoriqueComponent {
  readonly breadcrumbs: Breadcrumb[] = [
    { label: 'Découvrez le CEFTI', link: '/decouvrez/mot-fondateur' },
    { label: 'Historique' },
  ];

  readonly etapes: EtapeTimeline[] = [
    {
      annee: '1992',
      titre: 'Fondation du CEFTI',
      desc: "Ouverture de la formation professionnelle en Chaudronnerie et Mécanique Automobile avec le soutien de la coopération Danoise. Vision de M. Paul GUIMEZAP : former sur place les personnels qualifiés au lieu d'en importer depuis l'Afrique du Sud.",
    },
    {
      annee: 'Expansion',
      titre: 'Expansion industrielle',
      desc: "Extension aux filières Froid & Climatisation (FC), Électricité (ELECT) et Électronique (ELNI) sur deux ans.",
    },
    {
      annee: 'Numérique',
      titre: 'Informatique & Tertiaire',
      desc: "Ajout de la Maintenance des Systèmes Informatiques et Réseaux, Secrétariat Bilingue et Infographie, répondant à l'essor national et international de l'informatique.",
    },
    {
      annee: '2000-2001',
      titre: 'Premiers baccalauréats',
      desc: "Présentation des premiers candidats au Baccalauréat F et Brevets Techniciens. Ouverture du 1er cycle industriel pour les jeunes de 10 à 13 ans.",
    },
    {
      annee: '2014',
      titre: 'Commerce & Gestion',
      desc: "Ouverture des filières commerciales : ACA (Action et Communication Administrative) et CG (Comptabilité et Gestion), répondant aux nouvelles demandes du marché.",
    },
    {
      annee: 'Post-2014',
      titre: 'Innovation et diversification',
      desc: "Ouverture successive de F8 (Sciences et Technologie de la Santé), ISRH (Installation Sanitaire et Réseau Hydraulique), TI (Technologie de l'Information) et du 1er cycle 6ème, 5ème et 4ème ALL & ESP.",
    },
    {
      annee: "Aujourd'hui",
      titre: 'Leader régional',
      desc: 'Le CEFTI est classé parmi les leaders par le MINEFOP et le Ministère des Enseignements Secondaires. Plus de 2 000 diplômés par an. Personnel stable à 80%.',
    },
  ];
}

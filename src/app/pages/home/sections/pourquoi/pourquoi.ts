import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll';

interface Pilier {
  icon: string;
  title: string;
  desc: string;
  accent: string;
}

@Component({
  selector: 'app-pourquoi',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScrollDirective],
  templateUrl: './pourquoi.html',
  styleUrl: './pourquoi.scss',
})
export class Pourquoi {
  readonly piliers: Pilier[] = [
    {
      icon: 'workshop',
      title: 'Ateliers équipés',
      desc: 'Des salles machines, labos informatiques et ateliers techniques opérationnels pour apprendre en faisant, dès le premier jour.',
      accent: 'var(--petrole)',
    },
    {
      icon: 'mentor',
      title: 'Encadrement expert',
      desc: 'Des formateurs professionnels en activité qui transmettent des compétences directement exploitables sur le marché du travail.',
      accent: 'var(--or)',
    },
    {
      icon: 'briefcase',
      title: 'Insertion professionnelle',
      desc: "Un réseau d'entreprises partenaires et un accompagnement actif pour placer nos diplômés dès la fin de leur formation.",
      accent: 'var(--encre)',
    },
  ];
}

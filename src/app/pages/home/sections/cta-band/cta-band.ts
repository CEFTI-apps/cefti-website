import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll';

interface Etape {
  num: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-cta-band',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScrollDirective],
  templateUrl: './cta-band.html',
  styleUrl: './cta-band.scss',
})
export class CtaBand {
  readonly email = signal('');

  readonly etapes: Etape[] = [
    { num: '01', title: 'Candidature en ligne',   desc: '5 minutes, sans déplacement' },
    { num: '02', title: "Visite d'atelier",       desc: 'Viens voir, teste, décide' },
    { num: '03', title: 'Orientation conseillée', desc: "On t'aide à choisir ta filière" },
  ];

  onSubmit(e: Event): void {
    e.preventDefault();
    // TODO: connecter à l'API admissions
  }
}

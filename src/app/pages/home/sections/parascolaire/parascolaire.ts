import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll';

interface Activite {
  slug: string;
  title: string;
  desc: string;
  image?: string;
  bgGradient: string;
  icon: string;
}

@Component({
  selector: 'app-parascolaire',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealOnScrollDirective],
  templateUrl: './parascolaire.html',
  styleUrl: './parascolaire.scss',
})
export class Parascolaire {
  readonly activites: Activite[] = [
    {
      slug: 'athletisme',
      title: 'Athlétisme',
      desc: 'Renforcez votre forme physique et vivez des moments sportifs mémorables dans notre communauté dynamique.',
      image: 'https://collegecefti.com/wp-content/uploads/2024/03/sport-cefti-576x1024.jpeg',
      bgGradient: 'linear-gradient(135deg, var(--petrole, #08272c), var(--petrole-2, #0d3d45))',
      icon: 'run',
    },
    {
      slug: 'football',
      title: 'Football',
      desc: 'Développez vos compétences sur le terrain et faites partie de notre communauté passionnée.',
      bgGradient: 'linear-gradient(135deg, var(--petrole-2, #0d3d45), var(--encre, #1a2f5e))',
      icon: 'ball',
    },
    {
      slug: 'gastronomie-musique',
      title: 'Gastronomie & Musique',
      desc: 'Libérez votre créativité et perfectionnez vos talents artistiques dans une communauté passionnée.',
      bgGradient: 'linear-gradient(135deg, var(--encre, #1a2f5e), #0a3a42)',
      icon: 'music',
    },
  ];
}

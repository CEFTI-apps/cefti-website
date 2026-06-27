import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll';

interface Activite {
  slug: string;
  title: string;
  desc: string;
  image: string;
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
      icon: 'run',
    },
    {
      slug: 'football',
      title: 'Football',
      desc: 'Développez vos compétences sur le terrain et faites partie de notre communauté passionnée.',
      image: 'https://collegecefti.com/wp-content/uploads/2024/03/sport-cefti-576x1024.jpeg',
      icon: 'ball',
    },
    {
      slug: 'gastronomie-musique',
      title: 'Gastronomie & Musique',
      desc: 'Libérez votre créativité et perfectionnez vos talents artistiques dans une communauté passionnée.',
      image: 'https://collegecefti.com/wp-content/uploads/2024/03/sport-cefti-576x1024.jpeg',
      icon: 'music',
    },
  ];
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../../shared/components/page-hero/page-hero';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-activity-school',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHero, RevealOnScrollDirective],
  templateUrl: './activity-school.html',
  styleUrl: './activity-school.scss',
})
export class ActivitySchool {
  readonly sports = [
    { name: 'Athlétisme', desc: 'Courses, sauts et lancers pour forger l\'endurance et la puissance physique de nos élèves.' },
    { name: 'Football', desc: 'Compétitions inter-classes et tournois régionaux dans la grande tradition CEFTI.' },
    { name: 'Arts Martiaux', desc: 'Discipline, concentration et maîtrise de soi par la pratique du judo et du karaté.' },
  ];

  readonly culture = [
    { name: 'Musique', desc: 'Chorale, percussions et instruments traditionnels pour éveiller la sensibilité artistique.' },
    { name: 'Gastronomie', desc: 'Ateliers culinaires autour des saveurs camerounaises et des cuisines du monde.' },
    { name: 'Clubs Culturels', desc: 'Théâtre, cinéma-club, débat et lecture pour enrichir la vie scolaire au quotidien.' },
  ];
}

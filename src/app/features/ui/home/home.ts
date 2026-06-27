import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Section } from '../../../components/section/section';
import { FeatureCard } from '../../../components/feature-card/feature-card';
import {
  faUsers,
  faBuilding,
  faHandsHelping,
} from '@fortawesome/free-solid-svg-icons';
import { ExploreCard } from '../../../components/explore-card/explore-card';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Section, FeatureCard, ExploreCard],
  templateUrl: './home.html',
  styleUrls: ['./home.scss', './home-responsive.scss'],
})
export class Home {
  readonly faUsers = faUsers;
  readonly faBuilding = faBuilding;
  readonly faHandsHelping = faHandsHelping;
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Section } from '../../../components/section/section';
import { FeatureCard } from '../../../components/feature-card/feature-card';
import { faUsers, faBuilding, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { ExploreCard } from '../../../components/explore-card/explore-card';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CommonModule, RouterModule,Section, FeatureCard,ExploreCard],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  faUsers = faUsers;
  faBuilding = faBuilding;
  faHandsHelping = faHandsHelping;
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHero } from '../../../shared/components/page-hero/page-hero';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll';

// ──────────────────────────────────────────────────
// INSTRUCTIONS PHOTOS
// Placer chaque fichier dans : public/assets/images/team/[prenom-nom].jpg
// Exemple : public/assets/images/team/jean-pierre-nkoa.jpg
// Puis dans employees.html, remplacer div.member-avatar par :
//   <img class="member-photo" [src]="member.photo" [alt]="member.name" />
// ──────────────────────────────────────────────────

interface StaffMember {
  name: string;
  role: string;
  initials: string;
  photo: string; // → public/assets/images/team/[prenom-nom].jpg
  bio: string;
}

interface StaffDepartment {
  dept: string;
  avatarBg: string;
  members: StaffMember[];
}

@Component({
  selector: 'app-employees',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHero, RevealOnScrollDirective],
  templateUrl: './employees.html',
  styleUrl: './employees.scss',
})
export class Employees {
  readonly departments: StaffDepartment[] = [
    {
      dept: 'Direction',
      avatarBg: '#08272c',
      members: [
        {
          name: 'Jean-Pierre Nkoa Essomba',
          role: 'Directeur Général',
          initials: 'JN',
          photo: 'assets/images/team/jean-pierre-nkoa-essomba.jpg',
          bio: "Fondateur et Directeur Général du CEFTI, porteur de la vision d'excellence technique au Cameroun depuis plus de 15 ans.",
        },
        {
          name: 'Marie-Thérèse Ondoua',
          role: 'Directrice Adjointe',
          initials: 'MO',
          photo: 'assets/images/team/marie-therese-ondoua.jpg',
          bio: "Coordinatrice des programmes pédagogiques, garante de la qualité de l'enseignement dispensé au CEFTI.",
        },
      ],
    },
    {
      dept: 'Administration',
      avatarBg: '#0E5A63',
      members: [
        {
          name: 'Samuel Ateba Meyong',
          role: 'Responsable Pédagogique',
          initials: 'SA',
          photo: 'assets/images/team/samuel-ateba-meyong.jpg',
          bio: "Coordonne l'organisation des emplois du temps et assure le suivi des résultats académiques des élèves.",
        },
        {
          name: 'Françoise Nlend Bikoue',
          role: 'Responsable Scolarité',
          initials: 'FN',
          photo: 'assets/images/team/francoise-nlend-bikoue.jpg',
          bio: "Gère les inscriptions, les dossiers administratifs et l'accueil des familles et des nouveaux élèves.",
        },
        {
          name: 'Alphonse Minyem',
          role: 'Comptable',
          initials: 'AM',
          photo: 'assets/images/team/alphonse-minyem.jpg',
          bio: "Assure la gestion financière de l'établissement et le suivi de la facturation des frais de scolarité.",
        },
      ],
    },
    {
      dept: 'Corps Enseignant',
      avatarBg: '#C9851E',
      members: [
        {
          name: 'Paul Essomba Mbida',
          role: "Prof. Électronique & Électricité",
          initials: 'PE',
          photo: 'assets/images/team/paul-essomba-mbida.jpg',
          bio: 'Ingénieur électronicien, formateur expert en systèmes électriques et électroniques industriels.',
        },
        {
          name: "Cécile Nguema Ebo'o",
          role: 'Prof. Informatique',
          initials: 'CN',
          photo: 'assets/images/team/cecile-nguema-eboo.jpg',
          bio: "Spécialiste en développement logiciel et administration réseau, 8 ans d'expérience pédagogique.",
        },
        {
          name: 'Henri Biya Nkeng',
          role: 'Prof. Mécanique Automobile',
          initials: 'HB',
          photo: 'assets/images/team/henri-biya-nkeng.jpg',
          bio: 'Technicien automobile certifié, dispense les cours pratiques en atelier mécanique.',
        },
        {
          name: 'Évelyne Mbarga Fouda',
          role: 'Prof. Français & Communication',
          initials: 'EM',
          photo: 'assets/images/team/evelyne-mbarga-fouda.jpg',
          bio: 'Licenciée en Lettres Modernes, enseigne le Français et les techniques de communication professionnelle.',
        },
      ],
    },
  ];
}

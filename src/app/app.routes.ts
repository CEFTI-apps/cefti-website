import { Routes } from '@angular/router';

export const routes: Routes = [
  // Public layout routes
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () => import('./features/ui/home/home').then((m) => m.Home),
    title: 'Cefti - Centre de Formation Technologie et Industrielle',
    data: { layout: 'public' },
  },
  {
    path: 'program',
    children: [
      { path: '', redirectTo: 'professional', pathMatch: 'full' },
      {
        path: 'professional',
        loadComponent: () =>
          import('./features/ui/programmes/programmes').then(
            (m) => m.Programmes
          ),
        title: 'Filières Professionnelles - Cefti',
        data: { layout: 'public', tab: 'pro' },
      },
      {
        path: 'academic',
        loadComponent: () =>
          import('./features/ui/programmes/programmes').then(
            (m) => m.Programmes
          ),
        title: 'Filières Académiques - Cefti',
        data: { layout: 'public', tab: 'aca' },
      },
      {
        path: 'filieres/:slug',
        loadComponent: () =>
          import('./features/ui/filiere-detail/filiere-detail').then(
            (m) => m.FiliereDetail
          ),
        title: 'Filière - Cefti',
        data: { layout: 'public' },
      },
    ],
  },
  {
    path: 'decouvrez',
    children: [
      {
        path: 'mot-fondateur',
        loadComponent: () =>
          import('./pages/decouvrez/mot-fondateur/mot-fondateur.component').then(
            (m) => m.MotFondateurComponent
          ),
        title: 'Mot du Président Fondateur - Cefti',
        data: { layout: 'public' },
      },
      {
        path: 'historique',
        loadComponent: () =>
          import('./pages/decouvrez/historique/historique.component').then(
            (m) => m.HistoriqueComponent
          ),
        title: 'Historique - Cefti',
        data: { layout: 'public' },
      },
      {
        path: 'missions',
        loadComponent: () =>
          import('./pages/decouvrez/missions/missions.component').then(
            (m) => m.MissionsComponent
          ),
        title: 'Missions, Visions, Valeurs - Cefti',
        data: { layout: 'public' },
      },
      {
        path: 'nos-atouts',
        loadComponent: () =>
          import('./pages/decouvrez/nos-atouts/nos-atouts.component').then(
            (m) => m.NosAtoutsComponent
          ),
        title: 'Nos Atouts - Cefti',
        data: { layout: 'public' },
      },
      {
        path: 'concours-examens',
        loadComponent: () =>
          import('./pages/decouvrez/concours-examens/concours-examens.component').then(
            (m) => m.ConcoursExamensComponent
          ),
        title: 'Concours & Examens - Cefti',
        data: { layout: 'public' },
      },
      {
        path: 'nos-batiments',
        loadComponent: () =>
          import('./pages/decouvrez/nos-batiments/nos-batiments.component').then(
            (m) => m.NosBatimentsComponent
          ),
        title: 'Nos Bâtiments - Cefti',
        data: { layout: 'public' },
      },
      {
        path: 'nos-ateliers',
        loadComponent: () =>
          import('./pages/decouvrez/nos-ateliers/nos-ateliers.component').then(
            (m) => m.NosAteliersComponent
          ),
        title: 'Nos Ateliers - Cefti',
        data: { layout: 'public' },
      },
    ],
  },
  {
    path: 'activity',
    loadComponent: () =>
      import('./features/ui/activity-school/activity-school').then(
        (m) => m.ActivitySchool
      ),
    title: 'Activités - Cefti',
    data: { layout: 'public' },
  },
  {
    path: 'employe',
    loadComponent: () =>
      import('./features/ui/employees/employees').then((m) => m.Employees),
    title: 'Employés - Cefti',
    data: { layout: 'public' },
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/ui/contact/contact').then((m) => m.Contact),
    title: 'Contactez Nous - Cefti',
    data: { layout: 'public' },
  },
  {
    path: 'visit',
    loadComponent: () =>
      import('./features/ui/visit-school/visit-school').then(
        (m) => m.VisitSchool
      ),
    title: 'Visitez - Cefti',
    data: { layout: 'public' },
  },
  {
    path: 'ask',
    loadComponent: () =>
      import('./features/ui/requete/requete').then((m) => m.Requete),
    title: 'Requete - Cefti',
    data: { layout: 'public' },
  },
  {
    path: '404',
    title: 'Page Not Found - Cefti',
    loadComponent: () =>
      import('./features/components/not-found/not-found').then(
        (m) => m.NotFound
      ),
    data: { layout: 'public' },
  },
  // Catch all unknown routes and redirect to 404
  { path: '**', redirectTo: '404' },
];

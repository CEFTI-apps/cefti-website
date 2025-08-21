import { Routes } from '@angular/router';

export const routes: Routes = [
    // Public layout routes
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    }                                                           ,
    {                                                                       
        path : 'home',
        loadComponent: ()=> import('./features/ui/home/home').then(m => m.Home),
        title : 'Cefti - Centre de Formation Technologie et Industrielle',
        data : { layout : 'public' }
    },
    {                                                                       
        path : 'program',
        loadComponent: ()=> import('./features/ui/home/home').then(m => m.Home),
        title : "Programme d'Etudes - Cefti",
        data : { layout : 'public' }
    },
    {                                                                       
        path : 'activity',
        loadComponent: ()=> import('./features/ui/home/home').then(m => m.Home),
        title : 'Activités - Cefti',
        data : { layout : 'public' }
    },
    {                                                                       
        path : 'employe',
        loadComponent: ()=> import('./features/ui/home/home').then(m => m.Home),
        title : 'Employés - Cefti',
        data : { layout : 'public' }
    },
    {                                                                       
        path : 'contact',
        loadComponent: ()=> import('./features/ui/home/home').then(m => m.Home),
        title : 'Contactez Nous - Cefti',
        data : { layout : 'public' }
    },
    {                                                                       
        path : 'visit',
        loadComponent: ()=> import('./features/ui/home/home').then(m => m.Home),
        title : 'Visitez - Cefti',
        data : { layout : 'public' }
    },
    {                                                                       
        path : 'ask',
        loadComponent: ()=> import('./features/ui/home/home').then(m => m.Home),
        title : 'Requete - Cefti',
        data : { layout : 'public' }
    },
    {
        path: '404',
        title : 'Page Not Found - Cefti',
        loadComponent: () => import('./features/components/not-found/not-found').then(m => m.NotFound),
        data: { layout: 'public' }
    },
     // Catch all unknown routes and redirect to 404
    { path: '**', redirectTo: '404' }
];

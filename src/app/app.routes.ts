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
        title : 'Accueil - Cefti',
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

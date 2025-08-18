import { Routes } from '@angular/router';
import { Home } from './features/ui/home/home';

export const routes: Routes = [
    // Public layout routes
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path : 'home',
        component: Home,
        data : { layout : 'public' }
    }
];

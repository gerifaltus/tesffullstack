import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./person/person-list.component')
    },
    {
        path:'nuevo',
        loadComponent: () => import('./person/form/person-form.component')
    },
    {
        path:':id/editar',
        loadComponent: () => import('./person/form/person-form.component')
    }
];

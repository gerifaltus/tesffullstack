import { Routes } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./persona/persona-list.component')
    },
    {
        path:'nuevo',
        loadComponent: () => import('./persona/form/persona-form.component')
    },
    {
        path:'editar/:id',
        loadComponent: () => import('./persona/form/persona-form.component')
    }
    
];

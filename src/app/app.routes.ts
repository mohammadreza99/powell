import {Routes} from '@angular/router';
import {NotFoundPage} from "@modules/layout/not-found/not-found.page";

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () => import('@modules/main/main.module').then((m) => m.MainModule),
    // canMatch: [authGuard],
  },
  {
    path: '404',
    component: NotFoundPage
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full',
  },
];

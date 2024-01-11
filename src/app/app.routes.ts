import { BillsComponent } from './pages/bills/bills.component';
import { isLoggedInGuardGuard } from './guards/is-logged-in-guard.guard';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        title: 'Perfil',
        canActivate: [isLoggedInGuardGuard],
      },
      {
        path: 'bills',
        component: BillsComponent,
        title: 'Facturas',
        canActivate: [isLoggedInGuardGuard],
      },
    ],
  },

  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Página no encontrada',
  },
];

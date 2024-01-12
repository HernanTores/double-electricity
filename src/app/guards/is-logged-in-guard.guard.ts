import { AuthService } from '../services/auth.service';
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
// Este guard verifica si el usuario está autenticado antes de dar acceso a una ruta
export const isLoggedInGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuth()) {
    return true;
  } else {
    const urlTree = router.createUrlTree(['/login']);
    return urlTree;
  }
};

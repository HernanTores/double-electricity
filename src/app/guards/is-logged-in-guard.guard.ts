import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const isLoggedInGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  if (authService.isAuth()) {
    return true
  } else {
    const urlTree = router.createUrlTree(['/login'])
    return urlTree
  }
};

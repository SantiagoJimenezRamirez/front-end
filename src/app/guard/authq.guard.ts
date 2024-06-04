import { CanActivateFn } from '@angular/router';

export const authqGuard: CanActivateFn = (route, state) => {
  return true;
};

import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authqGuard } from './authq.guard';

describe('authqGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authqGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RippleOptionsService } from './ripple-options.service';

describe('RippleOptionsService', () => {
  let service: RippleOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RippleOptionsService],
    });

    service = TestBed.get(RippleOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should configure ripples globally', () => {
    expect(service.disabled).toBeTruthy('ripples should be disabled');
  });
});

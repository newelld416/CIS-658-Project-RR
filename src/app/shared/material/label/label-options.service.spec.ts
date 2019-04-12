import { TestBed } from '@angular/core/testing';

import { LabelOptionsService } from './label-options.service';

describe('LabelOptionsService', () => {
  let service: LabelOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabelOptionsService],
    });

    service = TestBed.get(LabelOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should configure labels globally', () => {
    expect(service.float).toBe('never', 'labels should never float');
  });
});

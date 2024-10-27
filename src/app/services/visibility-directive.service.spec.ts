import { TestBed } from '@angular/core/testing';

import { VisibilityDirectiveService } from './visibility-directive.service';

describe('VisibilityDirectiveService', () => {
  let service: VisibilityDirectiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisibilityDirectiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

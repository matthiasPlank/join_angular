import { TestBed } from '@angular/core/testing';

import { ActiveSelectionService } from './active-selection.service';

describe('ActiveSelectionService', () => {
  let service: ActiveSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

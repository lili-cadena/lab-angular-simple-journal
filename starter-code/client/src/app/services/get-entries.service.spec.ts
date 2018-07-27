import { TestBed, inject } from '@angular/core/testing';

import { GetEntriesService } from './get-entries.service';

describe('GetEntriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetEntriesService]
    });
  });

  it('should be created', inject([GetEntriesService], (service: GetEntriesService) => {
    expect(service).toBeTruthy();
  }));
});

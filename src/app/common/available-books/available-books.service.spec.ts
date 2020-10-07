import { TestBed } from '@angular/core/testing';

import { AvailableBooksService } from './available-books.service';

describe('AvailableBooksService', () => {
  let service: AvailableBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

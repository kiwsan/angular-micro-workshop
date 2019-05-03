import { TestBed } from '@angular/core/testing';

import { TvShowsService } from './tv-shows.service';

describe('TvShowsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TvShowsService = TestBed.get(TvShowsService);
    expect(service).toBeTruthy();
  });
});

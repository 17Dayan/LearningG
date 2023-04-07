import { TestBed } from '@angular/core/testing';

import { AudioLearnService } from './audio-learn.service';

describe('AudioLearnService', () => {
  let service: AudioLearnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioLearnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

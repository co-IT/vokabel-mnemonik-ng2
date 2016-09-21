/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VocablesService } from './vocables.service';

describe('Service: Vocables', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VocablesService]
    });
  });

  it('should ...', inject([VocablesService], (service: VocablesService) => {
    expect(service).toBeTruthy();
  }));
});

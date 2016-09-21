/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiGatewaysService } from './api-gateways.service';

describe('Service: ApiGateways', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiGatewaysService]
    });
  });

  it('should ...', inject([ApiGatewaysService], (service: ApiGatewaysService) => {
    expect(service).toBeTruthy();
  }));
});

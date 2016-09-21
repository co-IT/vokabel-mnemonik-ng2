import { Injectable } from '@angular/core';
import { ApiGatewaysService } from './api-gateways.service';

@Injectable()
export class VocablesService {

  constructor(private apiGateways: ApiGatewaysService) { }

  useApiGateways() {
    this.apiGateways.greet();
  }
}

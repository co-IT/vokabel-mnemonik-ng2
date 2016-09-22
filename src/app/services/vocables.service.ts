import { Injectable } from '@angular/core';
import { ApiGatewaysService } from './api-gateways.service';

@Injectable()
export class VocablesService {
  private endpoint: any;

  constructor(private apiGateways: ApiGatewaysService) { }

  useApiGateways() {
    return this.apiGateways.linkFor('/Vokabeln')
                           .subscribe(endpoint => this.endpoint = endpoint);
  }
}

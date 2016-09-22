import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Gateways } from './gateways.enum';

@Injectable()
export class ApiGatewaysService {

  private root: string;
  private entryPoint: string;

  constructor(private http: Http) {
    this.root = 'http://localhost:41284';
    this.entryPoint = 'entryPoint';
  }

  get allLinks(): Observable<any> {
    return this.http.get(`${this.root}/${this.entryPoint}`)
                    .map(response => {
                      console.log(response.json().links);
                      return response.json().links;
                    })
                    .map(links => links.map(link => {
                      return {
                        title: link.title,
                        href : `${this.root}${link.href}`
                      };
                    }));
  }

  get allActions(): Observable<any> {
    return this.http.get(`${this.root}/${this.entryPoint}`)
                    .map(response => response.json().actions);
  }

  linkFor(certain: string): Observable<any> {
    return this.allLinks
               .filter(action => action.href === certain);
  }
}

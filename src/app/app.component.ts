import { Component } from '@angular/core';
import { ApiGatewaysService } from './services';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  links: Array<string>;

  constructor(private apis: ApiGatewaysService) {
    this.links = [];
    this.apis.allLinks
             .subscribe(links => this.links = links);
  }
}

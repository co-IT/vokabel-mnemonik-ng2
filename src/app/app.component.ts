import { Component } from '@angular/core';
import { VocablesService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private vocables: VocablesService) {
      this.vocables.useApiGateways();
  }
}

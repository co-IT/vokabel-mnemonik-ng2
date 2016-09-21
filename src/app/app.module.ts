import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VocablesListComponent } from './vocables-list/vocables-list.component';

import { ApiGatewaysService, VocablesService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    VocablesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiGatewaysService, VocablesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

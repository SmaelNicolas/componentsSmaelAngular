import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ContentAreaComponent } from './components/content-area/content-area.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftMenuComponent,
    ContentAreaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

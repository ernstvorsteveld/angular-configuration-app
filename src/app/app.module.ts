import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HelloWorldComponent} from "./hello-world/hello_world.component";
import {AppComponent} from "./app.component";
import {OauthClientComponent} from "./oauth-client/oauth-client.component";
import {MenuComponent} from "./menu/menu.component";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {Router, RouterModule} from '@angular/router';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './home/home.component';
import {OauthClientModule} from "./oauth-client/OauthClientModule";
import { OauthClientListTableComponent } from './oauth-client/oauth-client-list-table/oauth-client-list-table.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    AppRoutingModule,
    OauthClientModule,
  ],
  exports: [
    RouterModule,
  ],
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MenuComponent,
    HomeComponent,
    OauthClientListTableComponent,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {

  constructor(router: Router) {

  }
}

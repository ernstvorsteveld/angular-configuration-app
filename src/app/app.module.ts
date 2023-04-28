import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HelloWorldComponent} from "./hello-world/hello_world.component";
import {AppComponent} from "./app.component";
import {ConfigClientComponent} from "./client-configuration/config-client.component";
import {MenuComponent} from "./menu/menu.component";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {Router, RouterModule} from '@angular/router';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    AppRoutingModule,
  ],
  exports: [
    RouterModule,
  ],
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ConfigClientComponent,
    MenuComponent,
    HomeComponent,
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

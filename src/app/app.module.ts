import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HelloWorldComponent} from "./hello-world/hello_world.component";
import {AppComponent} from "./app.component";
import {ConfigClientComponent} from "./client-configuration/config-client.component";
import {MenuComponent} from "./menu/menu.component";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ConfigClientComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HelloWorldComponent,
    ConfigClientComponent,
    MenuComponent
  ]
})
export class AppModule {
}

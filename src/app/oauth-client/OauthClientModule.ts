import {NgModule} from "@angular/core";
import {OauthClientComponent} from "./oauth-client.component";
import {OauthClientListComponent} from "./OauthClientListComponent";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {NgStyle} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {OauthClientDataSource} from "./oauth-client-list-table/OauthClientDataSource";

@NgModule({
  declarations: [
    OauthClientListComponent,
    OauthClientComponent,
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatTableModule,
  ],
  imports: [
    MatTableModule,
    MatCardModule,
    MatIconModule,
    NgStyle,
  ],
  providers: [
    OauthClientDataSource
  ]
})
export class OauthClientModule {

}

import {Component} from '@angular/core';
import {OauthClientConfiguration} from "../domain/OauthClientConfiguration";

@Component({
  selector: 'config-client',
  templateUrl: './oauth-client.component.html',
  styleUrls: ['./oauth-client.component.sass']
})
export class OauthClientComponent {
  clientConfiguration: OauthClientConfiguration = {
    id: "ab",
    client: "GMAIL",
    clientId: "client-for-gmail",
    secret: "secret-for-gmail"
  }
}

import {Component} from '@angular/core';
import {OauthClientDataSource} from "./OauthClientDataSource";
import {OauthClientConfiguration} from "../../domain/OauthClientConfiguration";

@Component({
  selector: 'app-oauth-client-list-table.component',
  templateUrl: './oauth-client-list-table.component.html',
  styleUrls: ['./oauth-client-list-table.component.sass']
})
export class OauthClientListTableComponent {

  displayedColumns = ["seqNo", "description", "duration"];
  dataSource: OauthClientConfiguration[];

  constructor(oauthClientDatasource: OauthClientDataSource) {
    this.dataSource = oauthClientDatasource.clients;
  }
}

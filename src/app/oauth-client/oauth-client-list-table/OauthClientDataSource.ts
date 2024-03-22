import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {OauthClientConfiguration} from "../../domain/OauthClientConfiguration";
import {Observable, of} from "rxjs";

export class OauthClientDataSource implements DataSource<OauthClientConfiguration> {

  clients: OauthClientConfiguration[] = [{
    id: "ab",
    client: "GMAIL",
    clientId: "client-for-gmail",
    secret: "secret-for-gmail"
  }];

  connect(collectionViewer: CollectionViewer): Observable<OauthClientConfiguration[]> {
    return of(this.clients);
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

}

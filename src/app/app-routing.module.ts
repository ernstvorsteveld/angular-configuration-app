import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OauthClientComponent} from "./oauth-client/oauth-client.component";
import {HelloWorldComponent} from "./hello-world/hello_world.component";
import {HomeComponent} from "./home/home.component";
import {OauthClientListComponent} from "./oauth-client/OauthClientListComponent";
import {OauthClientListTableComponent} from "./oauth-client/oauth-client-list-table/oauth-client-list-table.component";

export const appRoutes: Routes = [
  {path: 'oauth-client-list-tiles', component: OauthClientListComponent},
  {path: 'oauth-client-list-table', component: OauthClientListTableComponent},
  {path: 'oauth-client-new', component: OauthClientComponent},
  {path: 'oauth-client', component: OauthClientComponent},
  {path: 'hello-world', component: HelloWorldComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        // preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

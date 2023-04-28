import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConfigClientComponent} from "./client-configuration/config-client.component";
import {HelloWorldComponent} from "./hello-world/hello_world.component";
import {HomeComponent} from "./home/home.component";

export const appRoutes: Routes = [
  {path: 'client-configuration', component: ConfigClientComponent},
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

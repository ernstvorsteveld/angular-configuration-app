import {Component} from '@angular/core';
import {ConfigMenuItem} from "../domain/config/menu";

@Component({
  selector: 'menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {

  // mainMenuItems: ConfigMenuItem[] = [
  //   {
  //     id: 1,
  //     text: "Home",
  //     super: 0,
  //     path: "home"
  //   },
  //   {
  //     id: 2,
  //     text: "Configuration",
  //     super: 0,
  //     path: "configuration",
  //   },
  // ];
  //
  // menuItems: ConfigMenuItem[] = [
  //   {
  //     id: 3,
  //     text: "Oauth clients",
  //     super: 2,
  //     path : "oauth-client"
  //   },
  //   {
  //     id: 4,
  //     text: "Something else",
  //     super: 2,
  //     path: "oauth-client"
  //   }
  //   ];
}

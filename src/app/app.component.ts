import {Component} from '@angular/core';
import {ChildrenOutletContexts} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Examples';

  constructor(private contexts: ChildrenOutletContexts) {
  }
}

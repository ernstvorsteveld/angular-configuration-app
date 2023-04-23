import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HelloWorldComponent} from "./hello-world/hello_world.component";
import {ConfigClientComponent} from "./client-configuration/config-client.component";
import {MenuComponent} from "./menu/menu.component";
import {MatMenu} from "@angular/material/menu";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, HelloWorldComponent, ConfigClientComponent, MenuComponent, MatMenu
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Examples'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Examples');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Hello World');
  });
});

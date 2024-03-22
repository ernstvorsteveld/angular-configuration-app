import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OauthClientListTableComponent } from './oauth-client-list-table.component';

describe('OauthClientListTableComponentComponent', () => {
  let component: OauthClientListTableComponent;
  let fixture: ComponentFixture<OauthClientListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OauthClientListTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OauthClientListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

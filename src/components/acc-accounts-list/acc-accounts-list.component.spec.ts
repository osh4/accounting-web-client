import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccAccountsListComponent } from './acc-accounts-list.component';

describe('AccAccountsListComponent', () => {
  let component: AccAccountsListComponent;
  let fixture: ComponentFixture<AccAccountsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccAccountsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccAccountsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

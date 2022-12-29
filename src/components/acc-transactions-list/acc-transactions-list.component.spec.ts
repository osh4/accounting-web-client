import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccTransactionsListComponent } from './acc-transactions-list.component';

describe('AccTransactionsListComponent', () => {
  let component: AccTransactionsListComponent;
  let fixture: ComponentFixture<AccTransactionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccTransactionsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccTransactionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

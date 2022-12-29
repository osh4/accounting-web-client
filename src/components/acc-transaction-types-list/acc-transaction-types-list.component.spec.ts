import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccTransactionTypesListComponent } from './acc-transaction-types-list.component';

describe('AccTransactionTypesComponent', () => {
  let component: AccTransactionTypesListComponent;
  let fixture: ComponentFixture<AccTransactionTypesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccTransactionTypesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccTransactionTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccIncomeComponent } from './acc-income.component';

describe('AccIncomeComponent', () => {
  let component: AccIncomeComponent;
  let fixture: ComponentFixture<AccIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccIncomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

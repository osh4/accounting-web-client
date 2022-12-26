import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccSettingsListComponent } from './acc-settings-list.component';

describe('ContactListComponent', () => {
  let component: AccSettingsListComponent;
  let fixture: ComponentFixture<AccSettingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccSettingsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccSettingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

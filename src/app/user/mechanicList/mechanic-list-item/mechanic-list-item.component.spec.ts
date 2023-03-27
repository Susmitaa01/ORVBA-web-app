import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicListItemComponent } from './mechanic-list-item.component';

describe('MechanicListItemComponent', () => {
  let component: MechanicListItemComponent;
  let fixture: ComponentFixture<MechanicListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechanicListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

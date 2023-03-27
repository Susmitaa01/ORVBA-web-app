import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicLoginComponent } from './mechanic-login.component';

describe('MechanicLoginComponent', () => {
  let component: MechanicLoginComponent;
  let fixture: ComponentFixture<MechanicLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechanicLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

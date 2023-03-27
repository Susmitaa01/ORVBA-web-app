import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicRegisterComponent } from './mechanic-register.component';

describe('MechanicRegisterComponent', () => {
  let component: MechanicRegisterComponent;
  let fixture: ComponentFixture<MechanicRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechanicRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

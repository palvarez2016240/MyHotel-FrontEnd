import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarHotelComponent } from './gestionar-hotel.component';

describe('GestionarHotelComponent', () => {
  let component: GestionarHotelComponent;
  let fixture: ComponentFixture<GestionarHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

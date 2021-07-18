import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionHechaComponent } from './reservacion-hecha.component';

describe('ReservacionHechaComponent', () => {
  let component: ReservacionHechaComponent;
  let fixture: ComponentFixture<ReservacionHechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservacionHechaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservacionHechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

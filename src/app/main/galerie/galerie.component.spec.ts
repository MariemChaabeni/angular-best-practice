import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieComponent } from './galerie.component';

describe('GalerieComponent', () => {
  let component: GalerieComponent;
  let fixture: ComponentFixture<GalerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

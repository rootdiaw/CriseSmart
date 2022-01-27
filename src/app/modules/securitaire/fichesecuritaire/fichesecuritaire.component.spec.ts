import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichesecuritaireComponent } from './fichesecuritaire.component';

describe('FichesecuritaireComponent', () => {
  let component: FichesecuritaireComponent;
  let fixture: ComponentFixture<FichesecuritaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichesecuritaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichesecuritaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

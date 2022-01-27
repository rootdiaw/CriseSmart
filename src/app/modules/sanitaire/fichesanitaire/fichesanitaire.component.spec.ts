import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichesanitaireComponent } from './fichesanitaire.component';

describe('FichesanitaireComponent', () => {
  let component: FichesanitaireComponent;
  let fixture: ComponentFixture<FichesanitaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichesanitaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichesanitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

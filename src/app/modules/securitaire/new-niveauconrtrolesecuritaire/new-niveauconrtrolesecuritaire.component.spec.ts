import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNiveauconrtrolesecuritaireComponent } from './new-niveauconrtrolesecuritaire.component';

describe('NewNiveauconrtrolesecuritaireComponent', () => {
  let component: NewNiveauconrtrolesecuritaireComponent;
  let fixture: ComponentFixture<NewNiveauconrtrolesecuritaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNiveauconrtrolesecuritaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNiveauconrtrolesecuritaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

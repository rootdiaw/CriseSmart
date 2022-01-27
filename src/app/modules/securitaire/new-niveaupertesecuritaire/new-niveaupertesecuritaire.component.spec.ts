import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNiveaupertesecuritaireComponent } from './new-niveaupertesecuritaire.component';

describe('NewNiveaupertesecuritaireComponent', () => {
  let component: NewNiveaupertesecuritaireComponent;
  let fixture: ComponentFixture<NewNiveaupertesecuritaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNiveaupertesecuritaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNiveaupertesecuritaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

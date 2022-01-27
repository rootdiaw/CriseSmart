import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNiveaupertesanitaireComponent } from './new-niveaupertesanitaire.component';

describe('NewNiveaupertesanitaireComponent', () => {
  let component: NewNiveaupertesanitaireComponent;
  let fixture: ComponentFixture<NewNiveaupertesanitaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNiveaupertesanitaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNiveaupertesanitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

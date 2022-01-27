import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNiveauconrtrolesanitaireComponent } from './new-niveauconrtrolesanitaire.component';

describe('NewNiveauconrtrolesanitaireComponent', () => {
  let component: NewNiveauconrtrolesanitaireComponent;
  let fixture: ComponentFixture<NewNiveauconrtrolesanitaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNiveauconrtrolesanitaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNiveauconrtrolesanitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

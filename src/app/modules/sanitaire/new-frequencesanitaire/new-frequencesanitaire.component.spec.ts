import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFrequencesanitaireComponent } from './new-frequencesanitaire.component';

describe('NewFrequencesanitaireComponent', () => {
  let component: NewFrequencesanitaireComponent;
  let fixture: ComponentFixture<NewFrequencesanitaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFrequencesanitaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFrequencesanitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

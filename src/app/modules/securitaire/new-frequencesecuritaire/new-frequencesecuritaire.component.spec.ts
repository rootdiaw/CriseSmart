import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFrequencesecuritaireComponent } from './new-frequencesecuritaire.component';

describe('NewFrequencesecuritaireComponent', () => {
  let component: NewFrequencesecuritaireComponent;
  let fixture: ComponentFixture<NewFrequencesecuritaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFrequencesecuritaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFrequencesecuritaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

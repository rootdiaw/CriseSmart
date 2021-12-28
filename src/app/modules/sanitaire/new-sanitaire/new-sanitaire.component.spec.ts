import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSanitaireComponent } from './new-sanitaire.component';

describe('NewSanitaireComponent', () => {
  let component: NewSanitaireComponent;
  let fixture: ComponentFixture<NewSanitaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSanitaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSanitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

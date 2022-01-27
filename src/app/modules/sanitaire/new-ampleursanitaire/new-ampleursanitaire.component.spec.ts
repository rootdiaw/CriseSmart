import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAmpleursanitaireComponent } from './new-ampleursanitaire.component';

describe('NewAmpleursanitaireComponent', () => {
  let component: NewAmpleursanitaireComponent;
  let fixture: ComponentFixture<NewAmpleursanitaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAmpleursanitaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAmpleursanitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

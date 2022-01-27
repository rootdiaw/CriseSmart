import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAmpleursecuritaireComponent } from './new-ampleursecuritaire.component';

describe('NewAmpleursecuritaireComponent', () => {
  let component: NewAmpleursecuritaireComponent;
  let fixture: ComponentFixture<NewAmpleursecuritaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAmpleursecuritaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAmpleursecuritaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

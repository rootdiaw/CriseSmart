import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSecuritaireComponent } from './new-securitaire.component';

describe('NewSecuritaireComponent', () => {
  let component: NewSecuritaireComponent;
  let fixture: ComponentFixture<NewSecuritaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSecuritaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSecuritaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

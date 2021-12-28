import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAmpleurComponent } from './new-ampleur.component';

describe('NewAmpleurComponent', () => {
  let component: NewAmpleurComponent;
  let fixture: ComponentFixture<NewAmpleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAmpleurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAmpleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

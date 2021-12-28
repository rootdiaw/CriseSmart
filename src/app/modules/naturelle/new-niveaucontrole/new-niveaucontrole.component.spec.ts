import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNiveaucontroleComponent } from './new-niveaucontrole.component';

describe('NewNiveaucontroleComponent', () => {
  let component: NewNiveaucontroleComponent;
  let fixture: ComponentFixture<NewNiveaucontroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNiveaucontroleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNiveaucontroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

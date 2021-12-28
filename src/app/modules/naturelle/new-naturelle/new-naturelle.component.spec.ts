import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNaturelleComponent } from './new-naturelle.component';

describe('NewNaturelleComponent', () => {
  let component: NewNaturelleComponent;
  let fixture: ComponentFixture<NewNaturelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNaturelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNaturelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

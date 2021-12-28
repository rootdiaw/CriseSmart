import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheactionComponent } from './ficheaction.component';

describe('FicheactionComponent', () => {
  let component: FicheactionComponent;
  let fixture: ComponentFixture<FicheactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

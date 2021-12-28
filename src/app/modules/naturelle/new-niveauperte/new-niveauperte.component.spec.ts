import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNiveauperteComponent } from './new-niveauperte.component';

describe('NewNiveauperteComponent', () => {
  let component: NewNiveauperteComponent;
  let fixture: ComponentFixture<NewNiveauperteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNiveauperteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNiveauperteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFrequenceComponent } from './new-frequence.component';

describe('NewFrequenceComponent', () => {
  let component: NewFrequenceComponent;
  let fixture: ComponentFixture<NewFrequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFrequenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFrequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

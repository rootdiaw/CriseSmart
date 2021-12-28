import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNaturelleComponent } from './list-naturelle.component';

describe('ListNaturelleComponent', () => {
  let component: ListNaturelleComponent;
  let fixture: ComponentFixture<ListNaturelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNaturelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNaturelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

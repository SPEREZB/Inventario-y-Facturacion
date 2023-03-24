import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarcedComponent } from './validarced.component';

describe('ValidarcedComponent', () => {
  let component: ValidarcedComponent;
  let fixture: ComponentFixture<ValidarcedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarcedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarcedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

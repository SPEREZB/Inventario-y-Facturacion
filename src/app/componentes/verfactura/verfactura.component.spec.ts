import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfacturaComponent } from './verfactura.component';

describe('VerfacturaComponent', () => {
  let component: VerfacturaComponent;
  let fixture: ComponentFixture<VerfacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerfacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerfacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

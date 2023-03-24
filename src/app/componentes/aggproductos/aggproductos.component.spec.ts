import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggproductosComponent } from './aggproductos.component';

describe('AggproductosComponent', () => {
  let component: AggproductosComponent;
  let fixture: ComponentFixture<AggproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggproductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

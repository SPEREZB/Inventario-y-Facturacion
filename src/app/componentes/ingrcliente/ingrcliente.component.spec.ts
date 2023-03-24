import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrclienteComponent } from './ingrcliente.component';

describe('IngrclienteComponent', () => {
  let component: IngrclienteComponent;
  let fixture: ComponentFixture<IngrclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngrclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngrclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdetallefComponent } from './verdetallef.component';

describe('VerdetallefComponent', () => {
  let component: VerdetallefComponent;
  let fixture: ComponentFixture<VerdetallefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerdetallefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerdetallefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

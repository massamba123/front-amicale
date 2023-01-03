import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatteraleComponent } from './latterale.component';

describe('LatteraleComponent', () => {
  let component: LatteraleComponent;
  let fixture: ComponentFixture<LatteraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatteraleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatteraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

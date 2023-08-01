import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorButtonsComponent } from './calculator-buttons.component';

describe('CalculatorButtonsComponent', () => {
  let component: CalculatorButtonsComponent;
  let fixture: ComponentFixture<CalculatorButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorButtonsComponent]
    });
    fixture = TestBed.createComponent(CalculatorButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

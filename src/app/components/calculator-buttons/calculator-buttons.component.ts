import { Component, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculator-buttons',
  templateUrl: './calculator-buttons.component.html',
  styleUrls: ['./calculator-buttons.component.scss']
})
export class CalculatorButtonsComponent {

  @Output() changeInputByNumber = new EventEmitter<string>();
  @Output() changeInputByOperator = new EventEmitter<string>();
  @Output() changeInputByDot = new EventEmitter<void>();
  @Output() changeInputByUnaryOperator = new EventEmitter<void>();
  @Output() changeInputByDoubleZero = new EventEmitter<void>();
  @Output() equalButton = new EventEmitter<void>();
  @Output() deleteAll = new EventEmitter<void>();

}

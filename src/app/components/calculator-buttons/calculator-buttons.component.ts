import { Component, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculator-buttons',
  templateUrl: './calculator-buttons.component.html',
  styleUrls: ['./calculator-buttons.component.scss']
})
export class CalculatorButtonsComponent {

  @Output() changeInputByNumber = new EventEmitter<any>();
  @Output() changeInputByOperator = new EventEmitter<any>();
  @Output() changeInputByDot = new EventEmitter<any>();
  @Output() changeInputByUnaryOperator = new EventEmitter<void>();
  @Output() changeInputByDoubleZero = new EventEmitter<void>();
  @Output() equalButton = new EventEmitter<void>();
  @Output() deleteAll = new EventEmitter<void>();

}

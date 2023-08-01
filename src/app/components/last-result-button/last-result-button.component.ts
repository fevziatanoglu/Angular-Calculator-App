import { Component , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-last-result-button',
  templateUrl: './last-result-button.component.html',
  styleUrls: ['./last-result-button.component.scss']
})
export class LastResultButtonComponent {

  @Output() changeInputByLastResult = new EventEmitter<void>();
}

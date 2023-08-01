import { Component , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-theme-toggle-button',
  templateUrl: './theme-toggle-button.component.html',
  styleUrls: ['./theme-toggle-button.component.scss']
})
export class ThemeToggleButtonComponent {
  @Input() theme: string = "light";
  @Output() toggleTheme = new EventEmitter<void>();
}

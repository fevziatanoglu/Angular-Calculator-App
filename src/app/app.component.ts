import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Calculator-App';

  darkTheme = false;

  themeToggle(){
    this.darkTheme = !this.darkTheme;

   document.documentElement.setAttribute('data-theme', this.darkTheme ? "dark" : "light");

   console.log("dark");
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Calculator-App';

  lastResult = "";
  input: string = "";
  history: string[] = [];
  darkTheme = false;
  canWrite = false;

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    document.documentElement.setAttribute('data-theme', this.darkTheme ? "dark" : "light");
  }


  changeInput(event: any) {
    this.input += event.target.innerText;
    console.log(this.input);
    this.canWrite = true;
  }

  changeInputByOperator(event: any) {
    if (this.canWrite) {
      this.input += event.target.innerText;
      this.canWrite = false;
    }
  }

  changeInputByLastResult() { this.input += this.lastResult; }


  equalButton() {
    try {

      this.lastResult = eval(this.input);
      this.history.push(this.input);
      this.input = eval(this.input);
    } catch (e) {
      console.log(e);
    }

  }

  deleteAll() {
    this.input = "";
  }

}

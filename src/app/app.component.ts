import { Component, HostListener } from '@angular/core';

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


  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
 
    const keyCode = event.keyCode || event.which;
    const keyValue = event.key;
    console.log(event);
    // Numbers
    if (keyCode >= 48 && keyCode <= 57) {
      this.input += keyValue;
      this.canWrite = true;
    }
    // delete
    else if(keyCode === 8){
      this.deleteAll();
    }
    // equal button
    else if(keyCode === 13){
      this.equalButton();
    }
  }

}

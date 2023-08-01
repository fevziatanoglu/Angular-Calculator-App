import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Calculator-App';

  lastResult: number = 0;

  input: string = "";
  history: string[] = [];

  darkTheme : boolean = false;

  canWriteOperator : boolean = false;
  canWriteZero : boolean = true;
  canWriteDot : boolean = false;

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    document.documentElement.setAttribute('data-theme' , this.darkTheme ? "dark" : "light");
  }

  changeInput(event: any) {
   
    console.log(this.input[this.input.length -1 ]);
    this.input += event.target.innerText;
    this.canWriteOperator= true;
    this.canWriteZero= true;
    console.log(event);
    console.log(this.input[this.input.length - 1]);
    console.log(Number.isInteger(Number(this.input[this.input.length -1 ])));
  }

  changeInputByZero(event : any){
    if(this.canWriteZero){
      this.input += event.target.innerText; 
      if(!this.canWriteOperator){this.canWriteZero = false;}
      this.canWriteOperator = true;
    }
  }

  changeInputByOperator(event: any) {
    if (this.canWriteOperator) {
      this.input += event.target.innerText;
      this.canWriteOperator= false;
      this.canWriteZero = true;
      this.canWriteDot = true;
    }
  } 

  changeInputByDot(){

    if(this.canWriteDot && Number.isInteger(Number.parseInt(this.input[this.input.length -1 ])) ){
      this.input += ".";
      this.canWriteDot = false;
    }

  }

  changeInputByLastResult() {
    if(this.lastResult){
      this.input += this.lastResult;
    }
  }

  equalButton() {
      if(this.canWriteOperator){
       this.lastResult = eval(this.input);
       this.input = eval(this.input);

       if(this.history.length > 4){
        this.history.shift();
       }
       this.history.push(this.input);
      }
     
  }

  deleteAll() {
    this.input = "";
    this.history = [];
    this.canWriteOperator= false;
    this.canWriteZero = true;
  }


  // keyboard 
  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
 
    const keyCode = event.keyCode;
    const keyValue = event.key;

    
    // Numbers
    if (keyCode >= 48 && keyCode <= 57) {
      this.input += keyValue;
      this.canWriteOperator= true;
      console.log(keyValue);
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

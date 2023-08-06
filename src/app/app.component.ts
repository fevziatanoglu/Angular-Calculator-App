import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Calculator-App';

  lastResult: string = "0";
  input: string = "";
  lastNumber: string = "";
  history: string[] = [];
  theme : string = "light-theme";
  canWriteOperator : boolean = false;
  
 
  
  ngOnInit() {
  this.theme = localStorage.getItem('theme') || "light-theme";
    document.documentElement.setAttribute('data-theme' , this.theme);
  }

  toggleTheme(): void {
    this.theme =  (this.theme == "light-theme") ? "dark-theme" : "light-theme";
    document.documentElement.setAttribute('data-theme' , this.theme);
    localStorage.setItem('theme', (this.theme));
  }

  changeInputByNumber(number: string): void {
    if(this.lastNumber === "0"){
      this.input = this.input.slice(0 , -1) + number;
      this.lastNumber = number;
    }else{
      this.input += number;
      this.lastNumber += number;
      this.canWriteOperator= true;
    }
  }

  changeInputByOperator(operator: string): void {
    if (this.canWriteOperator) {
      this.lastNumber = "";
      this.input += operator;
      this.canWriteOperator= false;
    }
  } 

  changeInputByDot(): void{
    if(!this.lastNumber.includes(".") && this.lastNumber !== ""){
      this.input += ".";
      this.lastNumber += ".";
      this.canWriteOperator = false;
    }
  }

  changeInputByUnaryOperator(): void{
    if(this.lastNumber !== ""){
      this.input = this.input.slice(0 , -1 * this.lastNumber.length) + (Number(this.lastNumber) * -1).toString();
      this.lastNumber = (Number(this.lastNumber) * -1).toString();
    }
  }

  changeInputByLastResult(): void {
    if(this.lastResult && this.lastResult !== "0"){
      this.input += this.lastResult;
      this.canWriteOperator = true; 
    }
  }

  changeInputByDoubleZero(): void{
    if(Number(this.lastNumber)){
      this.input += "00";
      this.lastNumber +=  "00";
    }
  }

  equalButton(): void {
      if(this.canWriteOperator){

        if(this.input.includes("--")){
          this.input = this.input.replace(/--/g, '+');
         }

         this.input = eval(this.input).toString();
         this.lastResult = this.input;
         this.lastNumber = this.input;


       if(this.history.length > 4){
        this.history.shift();
       }
       this.history.push(this.input);
       this.canWriteOperator = true;
      }
  }

  deleteAll(): void {
    this.input = "";
    this.lastNumber = "";
    this.history = [];
    this.canWriteOperator = false;
  }

  

  // keyboard 
  // @HostListener('window:keydown', ['$event'])
  // onKeyDown(event: KeyboardEvent) {
 
  //   const keyCode = event.keyCode;
  //   const keyValue = event.key;

    
  //   // Numbers
  //   if (keyCode >= 48 && keyCode <= 57) {
  //     this.input += keyValue;
  //     this.canWriteOperator= true;
  //   }
  //   // delete
  //   else if(keyCode === 8){
  //     this.deleteAll();
  //   }
  //   // equal button
  //   else if(keyCode === 13){
  //     this.equalButton();
  //   }
  // }

}

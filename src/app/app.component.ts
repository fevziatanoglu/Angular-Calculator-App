import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Calculator-App';

  lastResult: string = "0";
  input: string = "0";
  lastNumber: string = "0";
  history: string[] = [];
  theme : string = "light-theme";
  canWriteOperator : boolean = false;
  
 
  
  ngOnInit() {
  this.theme = localStorage.getItem('theme') || "light-theme";
    document.documentElement.setAttribute('data-theme' , this.theme);
  }

  // THEME BUTTON
  toggleTheme(): void {
    this.theme =  (this.theme == "light-theme") ? "dark-theme" : "light-theme";
    document.documentElement.setAttribute('data-theme' , this.theme);
    localStorage.setItem('theme', (this.theme));
  }

  // NUMBER BUTTON
  changeInputByNumber(number: string): void {
    if(this.lastNumber === "0"){
      this.input = this.input.slice(0 , -1) + number;
      this.lastNumber = number;
    }else{
      this.input += number;
      this.lastNumber += number;
    }
    this.canWriteOperator= true;
  }

  // OPERATOR BUTTON
  changeInputByOperator(operator: string): void {
    if (this.canWriteOperator) {
      this.lastNumber = "";
      this.input += operator;
    }else if(this.lastNumber === ""){
      this.input = this.input.slice(0 , -1) + operator;
    }
    this.canWriteOperator= false;
  } 

  // DOT BUTTON
  changeInputByDot(): void{
    if(!this.lastNumber.includes(".") && this.lastNumber !== ""){
      this.input += ".";
      this.lastNumber += ".";
      this.canWriteOperator = false;
    }
  }
  
  // PREFIX BUTTON
  changeInputByUnaryOperator(): void{
    if(this.lastNumber !== ""){
      this.input = this.input.slice(0 , -1 * this.lastNumber.length) + (Number(this.lastNumber) * -1).toString();
      this.lastNumber = (Number(this.lastNumber) * -1).toString();
    }
  }
   
  // LAST RESULT BUTTON
  changeInputByLastResult(): void {
    if(this.lastResult && this.lastResult !== "0"){
      this.input += this.lastResult;
      this.canWriteOperator = true; 
    }
  }
  
  // 00 BUTTON
  changeInputByDoubleZero(): void{
    if(Number(this.lastNumber) || !this.lastNumber.includes(".")){
      this.input += "00";
      this.lastNumber +=  "00";
    }
  }
  
  // RESULT BUTTON
  equalButton(): void {
      if(this.canWriteOperator){
       
        
        if(this.input.includes("--")){
          this.input = this.input.replace(/--/g, '+');
         }
             
         this.history.push(this.input);

         this.input = eval(this.input).toString();
          
         if (!isFinite(Number(this.input)) || isNaN(Number(this.input))) {
           this.deleteAll();
        }

         this.lastResult = this.input;
         this.lastNumber = this.input;


       if(this.history.length > 4){
        this.history.shift();
       }
       
       this.canWriteOperator = true;
      }
  }
  
  // AC BUTTON
  deleteAll(): void {
    this.input = "";
    this.lastNumber = "";
    this.history = [];
    this.canWriteOperator = false;
    this.input = "0";
    this.lastNumber = "0";
  }
}

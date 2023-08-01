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
  lastNumber: string = "";
  history: string[] = [];

  theme : string = "light-theme";
  canWriteOperator : boolean = false;
  
 
  
  ngOnInit() {
  this.theme = localStorage.getItem('theme') || "light-theme";
    console.log(localStorage.getItem('theme'));
    document.documentElement.setAttribute('data-theme' , this.theme);
  }

  toggleTheme() {
    this.theme =  (this.theme == "light-theme") ? "dark-theme" : "light-theme";
    document.documentElement.setAttribute('data-theme' , this.theme);
    localStorage.setItem('theme', (this.theme));
  }

  changeInputByNumber(number: string) {
    if(this.lastNumber === "0"){
      this.input = this.input.slice(0 , -1) + number;
      this.lastNumber = number;
    }else{
      this.input += number;
      this.lastNumber += number;
      this.canWriteOperator= true;
    }
  }

  changeInputByOperator(operator: string) {
    if (this.canWriteOperator) {
      this.lastNumber = "";
      this.input += operator;
      this.canWriteOperator= false;
    }
  } 

  changeInputByDot(){
    if(!this.lastNumber.includes(".") && this.lastNumber !== ""){
      this.input += ".";
      this.lastNumber += ".";
      this.canWriteOperator = false;
    }
  }

  changeInputByUnaryOperator(){
    if(this.lastNumber !== ""){
      this.input = this.input.slice(0 , -1 * this.lastNumber.length) + (Number(this.lastNumber) * -1).toString();
      this.lastNumber = (Number(this.lastNumber) * -1).toString();
    }
      
  }




  changeInputByLastResult() {
    if(this.lastResult){
      this.input += this.lastResult;
    }
  }

  equalButton() {
      if(this.canWriteOperator){

        if(this.input.includes("--")){
          this.input = this.input.replace(/--/g, '+');
         }

       this.lastResult = eval(this.input);
       this.input = eval(this.input);

      


       if(this.history.length > 4){
        this.history.shift();
       }
       this.history.push(this.input);
       this.canWriteOperator = true;
       this.lastNumber = "";
      }
  }

  deleteAll() {
    this.input = "";
    this.lastNumber = "";
    this.history = [];
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

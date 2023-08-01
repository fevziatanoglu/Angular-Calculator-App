import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThemeToggleButtonComponent } from './components/theme-toggle-button/theme-toggle-button.component';
import { LastResultButtonComponent } from './components/last-result-button/last-result-button.component';
import { CalculatorScreenComponent } from './components/calculator-screen/calculator-screen.component';
import { CalculatorButtonsComponent } from './components/calculator-buttons/calculator-buttons.component';
@NgModule({
  declarations: [
    AppComponent,
    ThemeToggleButtonComponent,
    LastResultButtonComponent,
    CalculatorScreenComponent,
    CalculatorButtonsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

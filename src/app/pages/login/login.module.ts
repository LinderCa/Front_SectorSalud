import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  //Declaramos componentes que seran utilizados en mi modulo
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
})
export class LoginModule { }

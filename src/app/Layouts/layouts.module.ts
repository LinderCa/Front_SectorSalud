import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  //Declaramos los componentes que pertenecen a ese modulo
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  //Importacion de modulos neccesarios para el modulo actual
  imports: [
    CommonModule
  ],

  //exportamos los componentes para que sean utilizados en otras partes del programa
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutsModule { }

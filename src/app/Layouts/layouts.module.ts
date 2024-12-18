import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './main/footer/footer.component';
import { HeaderComponent } from './main/header/header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  //Declaramos los componentes que pertenecen a ese modulo
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  //Importacion de modulos neccesarios para el modulo actual
  imports: [
    CommonModule, RouterModule
  ],
  //exportamos los componentes para que sean utilizados en otras partes del programa
  exports:[
    MainComponent
  ]
})
export class LayoutsModule { }

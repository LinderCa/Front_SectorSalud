import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FeacturesRoutingModule } from '../Feactures/feactures-routing.module';
import { LayoutsModule } from '../Layouts/layouts.module';


//FEACTURE: funcionalidades especificas y vistas como home, about

@NgModule({
  //Declaracion de componentes que seran utilizados en mi modulo
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FeacturesRoutingModule,
    LayoutsModule,//Importacion del modulo que sera utilizado en mi modulo actual
  ],
  //Exportamos los modulos para el poryecto
  exports:[
    HomeComponent,
  ]
})
export class FeacturesModule { }

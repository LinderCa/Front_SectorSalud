import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

//Enrutamiento del modulo FEACTURES
const routes:Routes=[
  {path:'',component:HomeComponent}, //Pagina principal

];

@NgModule({
  imports:[RouterModule.forChild(routes)], //Confugramos las rutas hijas
  //Exportamos el archivo de enturamiento del modulo feactures
  exports:[RouterModule],   //Exportamos el RouterModule para otros modulos lo utilizen
})
export class FeacturesRoutingModule { }

import { Routes } from '@angular/router';

export const routes: Routes = [
  //Registramos el modulo FeacturesModule
    //--Para una carga diferida(Lazy loanding) se usa LoadChildren
  {
    path:'',
    loadChildren:()=>
      import('./Feactures/feactures.module').then((m)=>m.FeacturesModule),
  }
];

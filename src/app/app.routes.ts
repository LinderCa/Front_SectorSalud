import { Routes,RouterModule } from '@angular/router';
import { MainComponent } from './Layouts/main/main.component';
import { HomeComponent } from './pages/home/home/home.component';
import { LoginComponent } from './pages/login/login/login.component';
export const routes: Routes = [
  //Cargamos las rutas
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component:HomeComponent
      },
      {
        path:'Login',
        component:LoginComponent}
    ],
  },


];

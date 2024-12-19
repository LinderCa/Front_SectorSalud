import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl:'./header.component.css'
})
export class HeaderComponent {
  srcImagen:string="assets/imagenes/logo.png";
  srcCiudadEten:string='assets/imagenes/ciudadEten.png';

}

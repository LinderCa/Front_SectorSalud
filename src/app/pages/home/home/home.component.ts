import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  srcGestante='assets/imagenes/G.png';
  srcPersonal:string='assets/imagenes/PS.png';
  srcImagen_1:string='assets/imagenes/imagen_1.png';
  srcImagen_2:string='assets/imagenes/imagen_2.png';
  srcImagen_3:string='assets/imagenes/imagen_3.png'
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutsModule } from './Layouts/layouts.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LayoutsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SistemaMonitoreoPersonalizado';
}

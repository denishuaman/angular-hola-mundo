import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensaje = 'Curso de Angular';
  nombre = 'denishuaman';
  imagenURL = 'http://lorempixel.com/400/200';
  estadoBoton = true;
  esActivo = true;

  getNombre() {
    return this.nombre;
  }
}

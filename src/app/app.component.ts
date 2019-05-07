import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensaje = 'Curso de Angular';
  nombre = 'denishuaman';

  getNombre() {
    return this.nombre;
  }
}

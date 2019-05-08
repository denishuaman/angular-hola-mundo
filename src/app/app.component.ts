import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mensaje = 'Curso de Angular';
  nombre = 'denishuaman';
  imagenURL = 'http://lorempixel.com/400/200';
  estadoBoton = true;
  esActivo = true;
  txtClassBotonActivo = '';
  persona = {
    nombre: 'Denis',
    edad: 25
  };

  constructor() { }

  ngOnInit() {
    console.log('Metodo created');
    this.txtClassBotonActivo = this.esActivo ? 'Botón con class' : 'Botón sin class';
  }

  getNombre() {
    return this.nombre;
  }

  save(e) {
    console.log(e);
    alert('Mouse event: ' + e.type);
  }

  onKeyUp(e) {
    if(e.keyCode === 13) {
      console.log('ENTER fue presionado');
      alert('ENTER fue presionado');
    }
  }

  onKeyUpEnter() {
    console.log('ENTER fue presionado');
    alert('ENTER fue presionado');
  }

  onKeyUp2(usuario) {
    console.log('Texto ingresado:', usuario);
    alert('Texto ingresado: ' + usuario);
  }
}

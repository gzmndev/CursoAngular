import { Component } from '@angular/core';
import { Curso } from './models/curso';

// import importa archivos o librerias
// {} es el nombre de la variable que va a tener las propiedades del from
// from es la ruta

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Creacion de variable , atributos, modelos
  title = 'Clase Jueves';

  arregloCurso:Curso[]=[
    {id :"1", nombre: "a", descripcion: "ewrfdsdsf", tiempo : "1 mes",  usuario : "auguzman"},
    {id :"2", nombre: "b", descripcion: "fdefdsf", tiempo : "2 meses",  usuario : "auguzman"},
    {id :"3", nombre: "c", descripcion: "dsfdsfds", tiempo : "3 meses",  usuario : "auguzman"},
    {id :"4", nombre: "d", descripcion: "dsfdsfdsf", tiempo : " 4meses",  usuario : "auguzman"}
  
  ]
}

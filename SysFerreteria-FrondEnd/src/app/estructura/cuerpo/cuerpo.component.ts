import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  title:string='Bienvenidos';
  a:number=10;
  b:number=20;
  usuario:string="Admin";
  estado:boolean=true;
  nombres:String='';
  apellidos:String='';
  correo:string='';

  productos:any=[
    {estado:0,precio:2500,nombre:"Laptop"},
    {estado:1,precio:2100,nombre:"Televisor"},
    {estado:0,precio:900,nombre:"Implerosa"},
    {estado:1,precio:100,nombre:"Mouse"},
    {estado:1,precio:2000,nombre:"Celular"},
    {estado:0,precio:1200,nombre:"Equipo de Sonido"},
  ];
  constructor() { 
    setTimeout(() => {
      this.estado=false;
    }, 5000);
  }
  enviarMensaje(){
    alert("Bievenidos a todos..");
  }
  ngOnInit(): void {
  }
}

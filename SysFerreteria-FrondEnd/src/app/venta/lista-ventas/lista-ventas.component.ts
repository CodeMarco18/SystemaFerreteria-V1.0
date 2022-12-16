import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venta } from 'src/app/modelo/venta';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-lista-ventas',
  templateUrl: './lista-ventas.component.html',
  styleUrls: ['./lista-ventas.component.css']
})
export class ListaVentasComponent implements OnInit {

  id:String
  ventas:Venta[];
  constructor(private ventasService:VentasService, private router:Router) { }

  ngOnInit(): void {
    this.listarVentas();
  }

  private listarVentas(){
    this.ventasService.listaVenta()
    .subscribe(data=>{
      this.ventas=data;
    });
  }

  detalleVenta(id:String){
    this.router.navigate(['detalleVenta',id])
  }

}

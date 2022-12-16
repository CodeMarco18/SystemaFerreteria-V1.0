import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venta } from 'src/app/modelo/venta';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-registra-ventas',
  templateUrl: './registra-ventas.component.html',
  styleUrls: ['./registra-ventas.component.css']
})
export class RegistraVentasComponent implements OnInit {

  venta:Venta=new Venta();
  constructor(private ventasService:VentasService, private router:Router) { }

  ngOnInit(): void {
  }
  guardarVentas(){
    this.ventasService.registrarVenta(this.venta)
    .subscribe(data=>{
      
      console.log(data);
      alert("Se registro correctamente..");
      this.router.navigate(["/clientes"]);
    }, error=>console.log(error));

  }
  guardar(){
    console.log(this.venta);
    this.guardarVentas();
  }
}

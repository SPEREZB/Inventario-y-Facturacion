import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicios/servicio.service';
@Component({
  selector: 'app-verproductos',
  templateUrl: './verproductos.component.html',
  styleUrls: ['./verproductos.component.css']
})
export class VerproductosComponent implements OnInit {

  productos:any; 

  constructor(public formulario: FormBuilder,
    private ruteador: Router,
    public servicio: ServicioService) {   
      this.ngOnInit();
    }
 
  ngOnInit(): void { 
    this.servicio.verproduc().subscribe(respuesta => {
      this.productos = respuesta;
    });
  }   
} 
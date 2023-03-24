import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicios/servicio.service';
@Component({
  selector: 'app-verfactura',
  templateUrl: './verfactura.component.html',
  styleUrls: ['./verfactura.component.css']
})
export class VerfacturaComponent implements OnInit {
  productos:any; 

  constructor(public formulario: FormBuilder,
    private ruteador: Router,
    public servicio: ServicioService) {   
      this.ngOnInit();
    }
 
  ngOnInit(): void { 
    this.servicio.verfactura().subscribe(respuesta => {
      this.productos = respuesta;
    });
  } 
} 
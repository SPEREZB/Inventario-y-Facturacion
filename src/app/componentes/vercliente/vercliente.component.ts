import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicios/servicio.service';
@Component({
  selector: 'app-vercliente',
  templateUrl: './vercliente.component.html',
  styleUrls: ['./vercliente.component.css']
})
export class VerclienteComponent implements OnInit {

  productos:any; 

  constructor(public formulario: FormBuilder,
    private ruteador: Router,
    public servicio: ServicioService) {   
      this.ngOnInit();
    }
 
  ngOnInit(): void { 
    this.servicio.vercliente().subscribe(respuesta => {
      this.productos = respuesta;
    });
  } 

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-validarced',
  templateUrl: './validarced.component.html',
  styleUrls: ['./validarced.component.css']
})


export class ValidarcedComponent implements OnInit {
  formulariocedula: FormGroup;
  productos:any;
  constructor(public formulario: FormBuilder,
    private ruteador: Router,
    public servicioresp: ServicioService,
    public servicio:ServicioService) {  this.formulariocedula = this.formulario.group({
      cedula: [''] 
    });     this.ngOnInit();}

  ngOnInit(): void {
    this.servicio.vercliente().subscribe(respuesta => {
      this.productos = respuesta;
    });
  }
  enviardatos():any{
    this.servicio.verificarced(this.formulariocedula.value).subscribe(respuesta=>{
      alert(respuesta.message)
    }); 
    this.servicio.filtracliente(this.formulariocedula.value).subscribe(respuesta=>{
      this.productos=respuesta; 
   }); 
  }  
} 
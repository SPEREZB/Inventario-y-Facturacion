import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicios/servicio.service';
@Component({
  selector: 'app-ingrcliente',
  templateUrl: './ingrcliente.component.html',
  styleUrls: ['./ingrcliente.component.css']
})
export class IngrclienteComponent implements OnInit {
  formulariocedula: FormGroup;
  constructor(public formulario: FormBuilder,
    private ruteador: Router,
    public servicio: ServicioService) {  this.formulariocedula = this.formulario.group({
       idcliente: [''],razonsocial: [''],direccion: [''],  telefono: [''] 
    }); }


  ngOnInit(): void {
  }
  enviardatos():any{
    this.servicio.ingcliente(this.formulariocedula.value).subscribe(respuesta=>{
      alert(respuesta.message)
    }); 
    
  }
} 
import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicios/servicio.service';
@Component({
  selector: 'app-aggproductos',
  templateUrl: './aggproductos.component.html',
  styleUrls: ['./aggproductos.component.css']
})
export class AggproductosComponent implements OnInit {

  formulariocedula: FormGroup;
  constructor(public formulario: FormBuilder,
    private ruteador: Router,
    public servicio: ServicioService) {  this.formulariocedula = this.formulario.group({
      idproducto: [''],nombre: [''],  cant: [''],precio:['']
    }); }


  ngOnInit(): void {
  }
  enviardatos():any{
    this.servicio.aggprod(this.formulariocedula.value).subscribe(respuesta=>{
      alert(respuesta.message)
    }); 
  }

}

import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicios/servicio.service';
@Component({
  selector: 'app-verdetallef',
  templateUrl: './verdetallef.component.html',
  styleUrls: ['./verdetallef.component.css']
})
export class VerdetallefComponent implements OnInit {
  formulariocedula: FormGroup; 
  detfact:any;
  detfactpie:any;
  mensaje: any;
  constructor(public formulario: FormBuilder,
    private ruteador: Router,
    public servicio: ServicioService) {  this.formulariocedula = this.formulario.group({
      idfactura: [''] 
    }); }
  ngOnInit(): void {
  }
  
  hacerfactura():any{  
      this.servicio.obtenerDatosFacturaValor(this.formulariocedula.value).subscribe(respuesta=>{  
        this.detfact=respuesta; 
      }); 

      this.servicio.obtenerDatosFacturaPieValor(this.formulariocedula.value).subscribe(respuesta=>{  
        this.detfactpie=respuesta; 
      });  
     
  }
}

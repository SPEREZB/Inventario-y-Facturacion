import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicios/servicio.service';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  formulariocedula: FormGroup;
  fact:any;
  detfact:any;
  detfactpie:any;
  mensaje: any;
  constructor(public formulario: FormBuilder,
    private ruteador: Router,
    public servicio: ServicioService) {  this.formulariocedula = this.formulario.group({
      idfactura: [''],nombrep: [''],cedula: [''],idproduc: [''],  cant: ['']
    }); }


  ngOnInit(): void { 
  }
  enviardatos():any{
    this.servicio.facturar(this.formulariocedula.value).subscribe(respuesta=>{ 
      alert(respuesta.message)
    }); 
  } 
  hacerfactura():any{
    console.log(this.formulariocedula.value.cedula,this.formulariocedula.value.idproduc);
    this.servicio.crearFactura(this.formulariocedula.value).subscribe(respuesta=>{ 
      console.log(respuesta);
      this.fact=respuesta; 

      this.servicio.obtenerDatosFactura().subscribe(respuesta=>{ 
        console.log(respuesta); 
        this.detfact=respuesta; 
      }); 

      this.servicio.obtenerDatosFacturaPie().subscribe(respuesta=>{ 
        console.log(respuesta); 
        this.detfactpie=respuesta; 
      });  
    });   
  }
} 
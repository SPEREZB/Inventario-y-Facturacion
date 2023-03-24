import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ServicioService {
  api = "http://localhost:3000/";
  constructor(public clientehttp: HttpClient){ }

  //clientes
  verificarced(id:any):Observable<any>{
    return this.clientehttp.post(this.api+"verificar",id);
  }
  filtracliente(id:any):Observable<any>{
    return this.clientehttp.post(this.api+"filtracliente",id);
  }
  vercliente():Observable<any>{
    return this.clientehttp.get(this.api+"vercliente");
  } 
  ingcliente(id:any):Observable<any>{
    return this.clientehttp.post(this.api+"ingcliente",id);
  } 

  //facturas
  
  crearFactura(datos:any):Observable<any>{
    return this.clientehttp.post(this.api+"crearFactura",datos);
  }
 
  facturar(datos:any):Observable<any>{
    return this.clientehttp.post(this.api+"aggfact",datos);
  }

  verfactura():Observable<any>{
    return this.clientehttp.get(this.api+"verfact");
  }

  obtenerDatosFactura():Observable<any>{
    return this.clientehttp.get(this.api+"getDatosFactura");
  }

  obtenerDatosFacturaPie():Observable<any>{
    return this.clientehttp.get(this.api+"getDatosFacturaPie");
  }

  obtenerDatosFacturaValor(id:any):Observable<any>{
    return this.clientehttp.post(this.api+"getDatosFacturavalor",id);
  }

  obtenerDatosFacturaPieValor(id:any):Observable<any>{
    return this.clientehttp.post(this.api+"getDatosFacturaPievalor",id);
  }

 verDetalleF():Observable<any>{
    return this.clientehttp.get(this.api+"verdetallef");
  }
  //productos
  verproduc():Observable<any>{
    return this.clientehttp.get(this.api+"verproduc");
  }
  aggprod(datos:any):Observable<any>{
    return this.clientehttp.post(this.api+"aggprod",datos);
  }
   
}
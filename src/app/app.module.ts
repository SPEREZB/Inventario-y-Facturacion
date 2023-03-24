import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidarcedComponent } from './componentes/validarced/validarced.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { IngrclienteComponent } from './componentes/ingrcliente/ingrcliente.component';
import { FacturaComponent } from './componentes/factura/factura.component';
import { VerfacturaComponent } from './componentes/verfactura/verfactura.component';
import { AggproductosComponent } from './componentes/aggproductos/aggproductos.component';
import { VerproductosComponent } from './componentes/verproductos/verproductos.component';
import { VerclienteComponent } from './componentes/vercliente/vercliente.component';
import { VerdetallefComponent } from './componentes/verdetallef/verdetallef.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidarcedComponent,
    IngrclienteComponent,
    FacturaComponent,
    VerfacturaComponent,
    AggproductosComponent,
    VerproductosComponent,
    VerclienteComponent,
    VerdetallefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

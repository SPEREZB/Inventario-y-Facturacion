import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarcedComponent } from './componentes/validarced/validarced.component';
import { IngrclienteComponent } from './componentes/ingrcliente/ingrcliente.component';
import { FacturaComponent } from './componentes/factura/factura.component';
import { VerfacturaComponent } from './componentes/verfactura/verfactura.component';
import { AggproductosComponent } from './componentes/aggproductos/aggproductos.component';
import { VerproductosComponent } from './componentes/verproductos/verproductos.component';
import { VerclienteComponent } from './componentes/vercliente/vercliente.component';
import { VerdetallefComponent } from './componentes/verdetallef/verdetallef.component';
const routes: Routes = [{path:'', pathMatch:'full',redirectTo:'validar'},
{path:'validar', component:ValidarcedComponent},
{path:'ingresar', component:IngrclienteComponent},
{path:'factura', component:FacturaComponent},
{path:'verfact', component:VerfacturaComponent},
{path:'aggprod', component:AggproductosComponent},
{path:'verprod', component:VerproductosComponent},
{path:'vercliente', component:VerclienteComponent},
{path:'verdetallef', component:VerdetallefComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
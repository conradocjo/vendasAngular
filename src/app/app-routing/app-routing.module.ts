import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiversaoComponent } from '../diversao/diversao.component';
import { RestaurantesComponent } from '../restaurantes/restaurantes.component';
import { HomeComponent } from '../home/home.component';
import { OfertaComponent } from '../oferta/oferta.component';
import { ComoUsarComponent } from '../oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from '../oferta/onde-fica/onde-fica.component';
import { OrdemCompraComponent } from '../ordem-compra/ordem-compra.component';

const ROUTES: Routes = [
  { path: 'diversao', component: DiversaoComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ofertas/:id', component: OfertaComponent,
     children: [
      { path: '', component:ComoUsarComponent},
      { path: 'como-usar', component: ComoUsarComponent },
      { path: 'onde-fica', component:OndeFicaComponent }
    ]
  },
  { path: 'ordem-compra', component: OrdemCompraComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

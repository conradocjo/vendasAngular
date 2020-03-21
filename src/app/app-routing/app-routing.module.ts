import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiversaoComponent } from '../diversao/diversao.component';
import { RestaurantesComponent } from '../restaurantes/restaurantes.component';
import { HomeComponent } from '../home/home.component';
import { OfertaComponent } from '../oferta/oferta.component';

const ROUTES: Routes = [
  { path: 'diversao', component: DiversaoComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ofertas/:id', component: OfertaComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

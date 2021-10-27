import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: 'Contato', component: ContatoComponent},
{path: 'Home', component: HomeComponent},
{path: 'QuemSomos', component: QuemsomosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

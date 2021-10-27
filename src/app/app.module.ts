import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ComponentCardComponent } from './component-card/component-card.component';
import { ListCardComponent } from './list-card/list-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ComponentCardComponent,
    ListCardComponent,
    HomeComponent,
    ContatoComponent,
    QuemsomosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

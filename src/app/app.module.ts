import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { MoedaBrasilPipe } from './moeda-brasil.pipe';
import { FormataDataPipe } from './formata-data.pipe';
import { MeusClientesDirective } from './meus-clientes.directive';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    MoedaBrasilPipe,
    FormataDataPipe,
    MeusClientesDirective,
    NovoClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

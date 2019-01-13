import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../Cliente';
import { ClientesComponent } from '../clientes/clientes.component';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent implements OnInit {
  
  cliente:Cliente = {
    nome: "",
    idade: 0,
    valor: 0,
    nasc: '1991-08-30'
  };

  @Input()
  clientes;

  addcliente(){
    let cli = Object.assign({}, this.cliente)
    this.clientes.push(cli);
  }
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Cliente';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent implements OnInit {

  clientes = [];
  
  cliente:Cliente = {
    nome: "",
    idade: 0,
    valor: 0,
    nasc: '1991-08-30'
  };

  addcliente(){
    let cli = Object.assign({}, this.cliente)
    this.clientes.push(cli);
  }
  constructor() { }

  ngOnInit() {
  }

}

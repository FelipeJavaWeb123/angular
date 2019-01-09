import { Component } from '@angular/core';
import { Cliente } from './Cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Felipe Alves Silva';
  
  clientes:Array<Cliente> = [];
}

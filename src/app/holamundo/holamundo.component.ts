import { Component, signal } from '@angular/core';
import { HijoHolaMundoComponent } from './hijo-hola-mundo/hijo-hola-mundo.component';


@Component({
  selector: 'app-holamundo',
  standalone: true,
  imports: [ HijoHolaMundoComponent],
  templateUrl: './holamundo.component.html',
  styleUrl: './holamundo.component.css'
})
export class HolamundoComponent {
  title = ['Hola Mundo', 'Hola Mundo 2', 'Hola Mundo 3'];
  valor = ""
  recibirValor($event: any) {

    console.log($event);
    this.valor = $event;
  }


}


import { Component, effect, input, output, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo-hola-mundo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo-hola-mundo.component.html',
  styleUrl: './hijo-hola-mundo.component.css'
})
export class HijoHolaMundoComponent {
  readonly tituloNombreSignal= input.required<string>();
  valor = signal<string>("");
  valorPaMiPapa = output<string>();
  constructor() {
    effect(() => {
      this.valorPaMiPapa.emit(this.valor());
    });
  }

}

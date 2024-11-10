import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HolamundoComponent } from './holamundo/holamundo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HolamundoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DBApi';
}

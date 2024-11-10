import { Component, inject, OnInit } from '@angular/core';
import { CharactersService } from './services/characters.service';
import { FormsModule } from '@angular/forms';
import { Character } from '../model/character';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  characterService = inject(CharactersService);
  characters$ = this.characterService.getCharacters();
  ngOnInit(): void {

  }

}

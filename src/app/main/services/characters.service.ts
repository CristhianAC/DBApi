import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';
import { Character, Item } from '../../model/character';
import { CharacterAdapter } from '../../adapters/character.adapter';
@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  http = inject(HttpClient);
  url = environment.apiUrl
  getCharacters(): Observable<Item[]> {
    return this.http.get<Character>(this.url + 'characters', { headers: { }}).pipe(
      map(info => CharacterAdapter(info))
    );
  }
  
}

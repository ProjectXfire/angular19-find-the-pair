import type { Character } from "../../models/character.model";
import type { ApiResponse } from "../../models/api-characters.model";
import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay, map, Observable } from "rxjs";
import { CharacterMapper } from "../../mappers/characters.mapper";

@Injectable({
  providedIn: "root",
})
export class CharactersService {
  private httpService = inject(HttpClient);

  getCharacters(): Observable<Character[]> {
    const randomPage = Math.ceil(Math.random() * 30);
    return this.httpService
      .get<ApiResponse>(`https://rickandmortyapi.com/api/character?page=${randomPage}`)
      .pipe(
        delay(1000),
        map((res) => {
          const results = res.results;
          const characters = results.map((char) => CharacterMapper.fromObject(char));
          return characters;
        })
      );
  }
}

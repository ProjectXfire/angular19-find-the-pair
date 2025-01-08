import type { Character } from "@/src/core/game/models/character.model";
import type { Difficulty } from "../../types/difficulty.type";
import { inject, Injectable, signal } from "@angular/core";
import { timeDelay } from "@/shared/constants/times";
import { CharactersService } from "@/src/core/game/services/characters/characters.service";
import { TimerService } from "../timer/timer.service";

const quantity = { easy: 10, medium: 15, hard: 20 };

@Injectable({
  providedIn: "root",
})
export class GameService {
  private charactersService = inject(CharactersService);
  private timerService = inject(TimerService);

  private loading = signal<boolean>(false);
  private finish = signal<boolean>(false);
  private readyToPlay = signal<boolean>(true);
  private characters = signal<Character[]>([]);
  private charactersOriginal = signal<Character[]>([]);
  private totalPairs = signal<number>(0);
  private totalPairsFound = signal<number>(0);
  private indexFlipped = signal<number[]>([]);
  private difficultySelected = signal<number>(0);

  get pairs() {
    return this.totalPairs();
  }

  get pairsFound() {
    return this.totalPairsFound();
  }

  get charactersCards() {
    return this.characters();
  }

  get charsFlipped() {
    return this.indexFlipped();
  }

  get canPlay() {
    return this.readyToPlay();
  }

  get isLoading() {
    return this.loading();
  }

  get endGame() {
    return this.finish();
  }

  set endGame(value: boolean) {
    this.finish.set(value);
  }

  startNewGame(difficulty: Difficulty) {
    this.loading.set(true);
    const difficultySelected = quantity[difficulty];
    this.difficultySelected.set(difficultySelected);
    this.charactersService.getCharacters().subscribe((chars) => {
      const charactersWithDifficulty = chars.slice(0, difficultySelected);
      this.charactersOriginal.set(charactersWithDifficulty);
      const charsWithPairCard = this.createPairCard(charactersWithDifficulty);
      this.calculateInitAnimation(charsWithPairCard.length - 1);
      this.resetDataToDefault(charsWithPairCard);
      this.loading.set(false);
    });
  }

  resetGame() {
    const charsWithPairCard = this.createPairCard(this.charactersOriginal());
    this.resetDataToDefault(charsWithPairCard);
  }

  private resetDataToDefault(chars: Character[]) {
    this.characters.set(chars);
    this.totalPairs.set(chars.length / 2);
    this.totalPairsFound.set(0);
    this.indexFlipped.set([]);
  }

  private calculateInitAnimation(items: number) {
    this.readyToPlay.set(false);
    const waitAnimation = items * timeDelay;
    setTimeout(() => {
      this.readyToPlay.set(true);
    }, waitAnimation);
  }

  private createPairCard(chars: Character[]): Character[] {
    const clone = structuredClone(chars);
    const characters = [...clone, ...clone];
    const shuffleCharacters = this.shuffleCharacters(characters).map((char) => ({ ...char }));
    return shuffleCharacters;
  }

  private shuffleCharacters(chars: Character[]): Character[] {
    const clone = structuredClone(chars);
    const maxChars = clone.length;
    for (let i = maxChars - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [clone[i], clone[randomIndex]] = [clone[randomIndex], clone[i]];
    }
    return clone;
  }

  flippedCharacter(index: number) {
    if (this.timerService.seconds === 0) this.timerService.initTimer();
    const indexs = [...this.indexFlipped(), index];
    this.indexFlipped.set(indexs);
    const characters = structuredClone(this.characters());
    characters[index].isFlipped = true;
    this.characters.set(characters);
    if (indexs.length > 1)
      setTimeout(() => {
        this.verifySelectedCharacters(characters, index, indexs[0]);
      }, 600);
  }

  private verifySelectedCharacters(characters: Character[], cIndex: number, pvIndex: number) {
    const prevFlippedChar = characters[pvIndex];
    const currentFlippedChar = characters[cIndex];
    const areEqual = prevFlippedChar.id === currentFlippedChar.id;
    if (!areEqual) {
      prevFlippedChar.isFlipped = false;
      currentFlippedChar.isFlipped = false;
      characters[pvIndex] = prevFlippedChar;
      characters[cIndex] = currentFlippedChar;
      this.characters.set(characters);
    } else {
      this.totalPairsFound.set(this.totalPairsFound() + 1);
      if (this.totalPairsFound() === this.totalPairs()) {
        this.timerService.clearTimer();
        this.finish.set(true);
      }
    }
    this.indexFlipped.set([]);
  }
}

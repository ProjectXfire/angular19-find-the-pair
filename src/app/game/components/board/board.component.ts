import { Component, computed, inject } from "@angular/core";
import { NgClass, NgOptimizedImage, NgStyle } from "@angular/common";
import { timeDelay } from "@/shared/constants/times";
import { GameService } from "../../services/game/game.service";
import { SidebarService } from "../../services/sidebar/sidebar.service";
import { TimerComponent } from "@/src/shared/components/timer/timer.component";
import { LoaderComponent } from "@/src/shared/components/loader/loader.component";

@Component({
  selector: "app-board",
  imports: [TimerComponent, LoaderComponent, NgOptimizedImage, NgClass, NgStyle],
  templateUrl: "./board.component.html",
  styleUrl: "./board.component.css",
})
export class BoardComponent {
  gameService = inject(GameService);
  sidebarService = inject(SidebarService);
  indexsFlipped: number[] = [];
  animationDelay = timeDelay;

  pairs = computed(() => this.gameService.pairs);
  isLoading = computed(() => this.gameService.isLoading);
  pairsFound = computed(() => this.gameService.pairsFound);
  characters = computed(() => this.gameService.charactersCards);

  flippedCharacter(index: number) {
    if (this.gameService.charsFlipped.length > 1) return;
    if (!this.gameService.canPlay) return;
    if (this.characters()[index].isFlipped) return;
    this.indexsFlipped.push();
    this.gameService.flippedCharacter(index);
  }

  openSidebar() {
    this.sidebarService.setIsOpen(true);
  }
}

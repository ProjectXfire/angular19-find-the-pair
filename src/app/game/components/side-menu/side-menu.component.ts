import type { Difficulty } from "../../types/difficulty.type";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TimerService } from "../../services/timer/timer.service";
import { GameService } from "../../services/game/game.service";
import { SidebarService } from "../../services/sidebar/sidebar.service";
import { SelectModule } from "primeng/select";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-side-menu",
  imports: [SelectModule, FormsModule, ButtonModule],
  templateUrl: "./side-menu.component.html",
  styleUrl: "./side-menu.component.css",
})
export class SideMenuComponent {
  difficulties: Array<{ name: string; value: Difficulty }> = [
    { name: "Easy", value: "easy" },
    { name: "Medium", value: "medium" },
    { name: "Hard", value: "hard" },
  ];

  difficulty = this.difficulties[1];

  timerService = inject(TimerService);
  gameService = inject(GameService);
  sidebarService = inject(SidebarService);

  onStartNewGame() {
    this.gameService.startNewGame(this.difficulty.value);
    this.timerService.stopTimer();
    this.sidebarService.setIsOpen(false);
  }

  onResetGame() {
    this.gameService.resetGame();
    this.timerService.stopTimer();
    this.sidebarService.setIsOpen(false);
  }

  onCloseMenu() {
    this.sidebarService.setIsOpen(false);
  }
}

import { Component, computed, inject } from "@angular/core";
import { formatTime } from "@/shared/utils/format-time";
import { GameService } from "../../services/game/game.service";
import { TimerService } from "../../services/timer/timer.service";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-game-completed",
  imports: [ButtonModule],
  templateUrl: "./game-completed.component.html",
  styleUrl: "./game-completed.component.css",
})
export class GameCompletedComponent {
  gameService = inject(GameService);
  timerService = inject(TimerService);

  endGame = computed(() => this.gameService.endGame);
  time = computed(() => formatTime(this.timerService.seconds));

  startNewGame() {
    this.gameService.endGame = false;
    this.timerService.stopTimer();
    this.gameService.resetGame();
  }
}

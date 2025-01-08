import { TimerService } from "@/src/app/game/services/timer/timer.service";
import { Component, computed, inject } from "@angular/core";
import { formatTime } from "../../utils/format-time";

@Component({
  selector: "app-timer",
  imports: [],
  templateUrl: "./timer.component.html",
  styleUrl: "./timer.component.css",
})
export class TimerComponent {
  timer = inject(TimerService);

  timerText = computed(() => {
    return formatTime(this.timer.seconds);
  });
}

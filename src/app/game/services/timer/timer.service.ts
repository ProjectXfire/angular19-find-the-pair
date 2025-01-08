import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TimerService {
  private secondsSignal = signal<number>(0);
  private intervalId!: NodeJS.Timeout;

  constructor() {}

  get seconds() {
    return this.secondsSignal();
  }

  initTimer() {
    this.clearTimer();
    this.secondsSignal.set(0);
    this.intervalId = setInterval(() => {
      const newValue = this.secondsSignal() + 1;
      this.secondsSignal.set(newValue);
    }, 1000);
  }

  resetTimer() {
    this.clearTimer();
    this.initTimer();
  }

  stopTimer() {
    this.secondsSignal.set(0);
    this.clearTimer();
  }

  clearTimer() {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}

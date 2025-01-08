import { NgStyle } from "@angular/common";
import { Component, input, output } from "@angular/core";

@Component({
  selector: "app-push-button",
  imports: [NgStyle],
  templateUrl: "./push-button.component.html",
  styleUrl: "./push-button.component.css",
})
export class PushButtonComponent {
  text = input.required<string>();
  width = input<number>(50);
  pressButton = output<void>();

  handleClick() {
    this.pressButton.emit();
  }
}

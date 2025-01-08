import { NgStyle } from "@angular/common";
import { Component, input } from "@angular/core";

@Component({
  selector: "app-title-animated",
  imports: [NgStyle],
  templateUrl: "./title-animated.component.html",
  styleUrl: "./title-animated.component.css",
})
export class TitleAnimatedComponent {
  title = input.required<string>();
  subtitle = input.required<string>();

  titleArray: string[] = [];
  subtitleArray: string[] = [];

  ngOnInit(): void {
    this.titleArray = this.title().split("");
    this.subtitleArray = this.subtitle().split("");
  }
}

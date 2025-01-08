import { Component, input } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-background-image",
  imports: [NgOptimizedImage],
  templateUrl: "./background-image.component.html",
  styleUrl: "./background-image.component.css",
})
export class BackgroundImageComponent {
  imageSrc = input.required<string>();
}

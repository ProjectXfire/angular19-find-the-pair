import "primeicons/primeicons.css";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { BackgroundImageComponent } from "../shared/components/background-image/background-image.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, BackgroundImageComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "angular-find-the-pair";
}

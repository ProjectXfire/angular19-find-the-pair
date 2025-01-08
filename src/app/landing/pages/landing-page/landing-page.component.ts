import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { TitleAnimatedComponent } from "../../components/title-animated/title-animated.component";
import { PushButtonComponent } from "@/src/shared/components/push-button/push-button.component";

@Component({
  selector: "app-landing-page",
  imports: [TitleAnimatedComponent, PushButtonComponent],
  templateUrl: "./landing-page.component.html",
  styleUrl: "./landing-page.component.css",
})
export class LandingPageComponent {
  router = inject(Router);

  navigateToGame() {
    this.router.navigateByUrl("/game", { replaceUrl: true });
  }
}

import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./landing/pages/landing-page/landing-page.component").then(
        (c) => c.LandingPageComponent
      ),
  },
  {
    path: "game",
    loadComponent: () =>
      import("./game/pages/game-page/game-page.component").then((c) => c.GamePageComponent),
  },
];

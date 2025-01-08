import { Component } from "@angular/core";
import { SideMenuComponent } from "../../components/side-menu/side-menu.component";
import { BoardComponent } from "../../components/board/board.component";
import { GameCompletedComponent } from "../../components/game-completed/game-completed.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";

@Component({
  selector: "app-game-page",
  imports: [SideMenuComponent, BoardComponent, GameCompletedComponent, SidebarComponent],
  templateUrl: "./game-page.component.html",
  styleUrl: "./game-page.component.css",
})
export class GamePageComponent {}

import { Component, computed, inject } from "@angular/core";
import { SidebarService } from "../../services/sidebar/sidebar.service";
import { SideMenuComponent } from "../side-menu/side-menu.component";

@Component({
  selector: "app-sidebar",
  imports: [SideMenuComponent],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.css",
})
export class SidebarComponent {
  sidebarService = inject(SidebarService);

  isOpen = computed(() => this.sidebarService.isOpen);
}

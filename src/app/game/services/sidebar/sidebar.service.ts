import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SidebarService {
  private sidebarState = signal<boolean>(false);

  get isOpen() {
    return this.sidebarState();
  }

  setIsOpen(value: boolean) {
    this.sidebarState.set(value);
  }
}

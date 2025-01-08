import type { ApiCharacter } from "./api-character.model";

export interface ApiResponse {
  info: Info;
  results: ApiCharacter[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

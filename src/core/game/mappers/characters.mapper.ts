import type { Character } from "../models/character.model";

type ObjectFields = { [key: string]: any };

export class CharacterMapper {
  static fromObject(obj: ObjectFields): Character {
    const { id, name, image } = obj;
    const character: Character = {
      id,
      name,
      image,
      isFlipped: false,
    };
    return character;
  }
}

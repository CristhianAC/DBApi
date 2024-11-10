import { Character, Item } from "../model/character";

export const CharacterAdapter = (characterInfo: Character): Item[] => ([...characterInfo.items])

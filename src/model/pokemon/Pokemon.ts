import { PokemonTypes } from "./PokemonType";
import { PokemonSprites } from "./PokemonSprites";
import { PokemonStats } from "./PokemonStats";

export type Pokemon = {
    id: number;
    name: string;
    baseExperience: number;
    height: number;
    isDefault: boolean;
    order: number;
    weight: number;
    types: PokemonTypes;
    sprites: PokemonSprites;
    stats: PokemonStats;
}

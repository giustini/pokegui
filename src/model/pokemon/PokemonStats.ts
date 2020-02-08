import { PokemonStat } from "./PokemonStat";

export type PokemonStats = {
    hp: PokemonStat;
    attack: PokemonStat;
    defense: PokemonStat;
    specialAttack: PokemonStat;
    specialDefense: PokemonStat;
    speed: PokemonStat;
}

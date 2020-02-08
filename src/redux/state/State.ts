import { PokemonListItemDTO } from "../../services/PokemonService";

export type PokemonState = {
    pokemonList: PokemonListItemDTO[];
    total: number;
    loading: boolean;
}

export type State = {
    pokemon: PokemonState;
}

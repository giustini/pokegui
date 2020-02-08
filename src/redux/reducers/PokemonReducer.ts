import { AnyAction } from "redux";

import { GET_POKEMON_LIST, GET_POKEMON_LIST_ERROR, GET_POKEMON_LIST_SUCCESS } from "../actions/types";
import { PokemonState } from "../state/State";
import { PokemonListItemDTO } from "../../services/PokemonService";


const INITIAL_STATE: PokemonState = {
    pokemonList: [],
    total: 0,
    loading: false
};

export default (state: PokemonState = INITIAL_STATE, action: AnyAction) => {

    switch (action.type) {

        case GET_POKEMON_LIST:
            return { ...state, loading: true };

        case GET_POKEMON_LIST_SUCCESS:
            return {
                ...state,
                pokemonList: concatPokemonList(state, action.payload.pokemonList),
                total: action.payload.total,
                loading: false
            };

        case GET_POKEMON_LIST_ERROR:
            return { ...state, loading: true };

        default:
            return state;

    }
}

const concatPokemonList = (state: PokemonState, pokemonList: PokemonListItemDTO[]) => {
    return state.pokemonList.concat(pokemonList);
};

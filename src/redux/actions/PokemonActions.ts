import { Dispatch } from "redux";

import { GET_POKEMON_LIST, GET_POKEMON_LIST_ERROR, GET_POKEMON_LIST_SUCCESS } from "./types";
import PokemonService from "../../services/PokemonService";
import { QueryParams } from "../../services/http/HttpService";


const pokemonService: PokemonService = new PokemonService();

export const getPokemonList = (queryParams?: QueryParams) => (dispatch: Dispatch) => {

    dispatch({ type: GET_POKEMON_LIST });

    pokemonService.getPokemonList(queryParams).then(pokemonListResponse => {

        dispatch({
            type: GET_POKEMON_LIST_SUCCESS,
            payload: {
                pokemonList: pokemonListResponse.results,
                total: pokemonListResponse.count
            }
        });


    }).catch(error => {

        dispatch({
            type: GET_POKEMON_LIST_ERROR,
            payload: error
        });

    });
};

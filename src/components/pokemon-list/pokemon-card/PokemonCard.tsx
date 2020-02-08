import React, { Component } from "react";
import * as _ from "lodash";

import { PokemonListItemDTO } from "../../../services/PokemonService";

import "./PokemonCard.scss";

interface PokemonCardProps {
    pokemon: PokemonListItemDTO
}

interface PokemonCardState {

}

class PokemonCard extends Component<PokemonCardProps, PokemonCardState> {

    render() {

        const { pokemon } = this.props;

        return (
            <div className="pokemon-card">
                <li>{ _.capitalize(pokemon.name) }</li>
            </div>
        );
    }
}

export default PokemonCard;

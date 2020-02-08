import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import * as _ from "lodash";

import { QueryParams } from "../../services/http/HttpService";
import { PokemonState, State } from "../../redux/state/State";
import { getPokemonList } from "../../redux/actions/PokemonActions";
import PokemonCard from "./pokemon-card/PokemonCard";

import "./PokemonList.scss";


interface PokemonListReduxStateProps {
    pokemonListState: PokemonState;
}

interface PokemonListReduxDispatchProps {
    getPokemonList(queryParams?: QueryParams): any;
}

interface PokemonListState {

}

type PokemonListProps = PokemonListReduxStateProps & PokemonListReduxDispatchProps;

class PokemonList extends Component<PokemonListProps, PokemonListState> {

    componentDidMount() {
        this.props.getPokemonList({ offset: 0, limit: 151 });
    }

    render() {

        const { pokemonList } = this.props.pokemonListState;

        return (
            <div className="pokemon-list">
                <ul>
                    { _.map(pokemonList, (pokemon, i) => {
                        return (
                            <PokemonCard
                                pokemon={ pokemon }
                                key={ i }
                            />
                        );
                    }) }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state: State): PokemonListReduxStateProps => {
    return {
        pokemonListState: state.pokemon
    }
};

const mapDispatchToProps = (dispatch: Dispatch): PokemonListReduxDispatchProps => {
    return bindActionCreators({
        getPokemonList
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);

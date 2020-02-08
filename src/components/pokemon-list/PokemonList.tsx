import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { Avatar, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import * as _ from "lodash";

import { QueryParams } from "../../services/http/HttpService";
import { PokemonState, State } from "../../redux/state/State";
import { getPokemonList } from "../../redux/actions/PokemonActions";

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
                <TableContainer component={ Paper }>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={ { width: '10%' } }>#</TableCell>
                                <TableCell style={ { width: '10%' } }>Name</TableCell>
                                <TableCell style={ { width: '10%' } } />
                                <TableCell style={ { width: '70%' } } />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { _.map(pokemonList, (pokemon, i) => {
                                return (
                                    <TableRow key={ i }>
                                        <TableCell style={ { width: '10%' } }>{ i + 1 }</TableCell>
                                        <TableCell style={ { width: '10%' } }>{ _.capitalize(pokemon.name) }</TableCell>
                                        <TableCell style={ { width: '10%' } }>
                                            <Avatar
                                                variant="square"
                                                src={ `http://www.pokestadium.com/sprites/xy/${ pokemon.name }.gif` }
                                            />
                                        </TableCell>
                                        <TableCell style={ { width: '70%' } } />
                                    </TableRow>
                                );
                            }) }
                        </TableBody>
                    </Table>
                </TableContainer>
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

import React, { Component } from 'react';

import PokemonList from "./components/pokemon-list/PokemonList";


interface AppProps {

}

interface AppState {

}

class App extends Component<AppProps, AppState> {

  render() {

    return (
        <PokemonList/>
    );
  }

}

export default App;

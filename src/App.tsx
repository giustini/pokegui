import React, { Component } from 'react';

import AppLayout from "./components/app-layout/AppLayout";


interface AppProps {

}

interface AppState {

}

class App extends Component<AppProps, AppState> {

    render() {

        return (
            <AppLayout />
        );
    }

}

export default App;

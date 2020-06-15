import React from 'react';
import './App.scss';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

interface AppProps {
    
}

interface AppState {

}

class App extends React.Component<AppProps, AppState>{
    constructor(props: AppProps) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className={"app"}>
                <header className={"header"}>

                </header>
            </div>
        )
    }
}

export default App;

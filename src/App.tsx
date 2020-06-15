import React from 'react';
import './App.scss';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import PartiesPage from "./pages/PartiesPage/PartiesPage";

interface AppProps {

}

interface AppState {

}

class App extends React.Component<AppProps, AppState> {
    render(): React.ReactNode {
        return (
            <Router>
                <div className={"app"}>
                    <header className={"header"}>

                    </header>
                    <Switch>
                        <Route path={"/"} exact>
                            <MainPage/>
                        </Route>
                        <Route path={"/party"}>
                            <PartiesPage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;

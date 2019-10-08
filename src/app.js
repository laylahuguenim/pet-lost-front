import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './app.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';
import * as serviceWorker from './utils/serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/pet/:slug" component={Detail} />
        </Switch>
    </ BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

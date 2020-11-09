import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import '../css/app.css';

ReactDOM.render((
    <BrowserRouter>
        <Navigation/>
        <Route exact path='/'><Home/></Route>
    </BrowserRouter>
), document.getElementById('app'));
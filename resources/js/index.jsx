import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css';

import Home from './components/Home';
import Navigation from './components/Navigation';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';

ReactDOM.render((
    <BrowserRouter>
        <Navigation/>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Footer/>
    </BrowserRouter>
), document.getElementById('app'));
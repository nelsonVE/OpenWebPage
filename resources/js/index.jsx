import React, {useReducer} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import {UserContext, Routing} from './components/Routing'
import {reducer, initialState} from './reducers/user.reducer'

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
    <UserContext.Provider value={{state, dispatch}}>
        <BrowserRouter>
            <Navigation/>
            <Routing/>
            <Footer/>
        </BrowserRouter>
    </UserContext.Provider>
    )
}

ReactDOM.render((
    <App/>
), document.getElementById('app'));
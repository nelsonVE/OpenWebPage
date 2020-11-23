import React, {useEffect, createContext, useContext} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';
import AuthService from '../../services/AuthService';
import Home from '../../components/Home';
import Register from '../../components/Register';
import Login from '../../components/Login';
import Profile from '../../components/Profile';

export const UserContext = createContext();

export const Routing = () => {
    const history = useHistory();
    const {state, dispatch} = useContext(UserContext);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if(user){
            dispatch({type: "USER", payload: user});
        } else {
            history.push("/login");
        }
    }, [])

    return (
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/profile' component={Profile}></Route>
    </Switch>
    )
}

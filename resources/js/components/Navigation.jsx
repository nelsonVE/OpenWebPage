import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {UserContext} from '../components/Routing'

function Navigation(){
    const {state, dispatch} = useContext(UserContext);
    const history = useHistory();
    
    const onLogout = () => {
        localStorage.clear();
        dispatch({ type: "CLEAR" });
        history.push("/login");
    }

    const renderList = () => {
        if(state){
            return [
                <li className="nav-item" key="profile"><NavLink activeClassName="active-menu" className="nav-link" to="/profile">Mi perfil</NavLink></li>,
                <li className="nav-item" key="logout"><NavLink activeClassName="active-menu" className="nav-link" onClick={onLogout} to="/login">Cerrar sesión</NavLink></li>
            ]
        } else {
            return [
                <li className="nav-item" key="login"><NavLink activeClassName="active-menu" className="nav-link" to="/login">Ingresar</NavLink></li>,
                <li className="nav-item" key="register"><NavLink activeClassName="active-menu" className="btn nav-link btn-success text-white" to="/register" hidden>¡Regístrate!</NavLink></li>
            ]
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-blue round-3">
            <a className="navbar-brand" href="#">OpenRoleplay</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse mr-auto" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink activeClassName="active-menu" className="nav-link" exact to="/">Inicio</NavLink>
                    </li>
                    {renderList()}
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
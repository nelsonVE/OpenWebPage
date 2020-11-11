import React from 'react'
import { Link } from 'react-router-dom'

function Navigation(){
    return (
        <nav className="navbar navbar-expand-lg navbar-blue round-3">
            <a className="navbar-brand" href="#">OpenRoleplay</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse mr-auto" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Ingresar</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="btn nav-link btn-success text-white" to="/register">¡Regístrate!</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
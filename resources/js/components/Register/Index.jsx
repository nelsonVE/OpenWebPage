import React from 'react';
import DatePicker from 'react-datepicker'

function Register() {
    return (
        <div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 offset-lg-4 offset-md-4 container mt-3 bg-blue p-2 rounded-top">
                <h3 className="text-white text-center">Regístrate</h3>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 offset-lg-4 offset-md-4 container bg-white p-4 rounded-bottom">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="username" placeholder="Usuario (Ej.: Nombre_Apellido)"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password" placeholder="Contraseña"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="email" placeholder="E-mail"/>
                    </div>
                    <div className="form-group">
                        <select className="form-control">
                            <option>Sexo</option>
                            <option>Masculino</option>
                            <option>Femenino</option>
                            <option>Otro</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <select className="form-control">
                            <option>Procedencia</option>
                            <option>Los Santos</option>
                            <option>San Fierro</option>
                            <option>Las Venturas</option>
                            <option>Liberty City</option>
                            <option>Vice City</option>
                            <option>Otro</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <DatePicker className="form-control width-100" placeholderText="Fecha de nacimiento"/>
                    </div>
                    <button className="btn btn-blue width-100">Registrarme</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
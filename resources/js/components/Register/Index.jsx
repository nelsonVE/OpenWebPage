import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import {constant} from '../../config/constants';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [origin, setOrigin] = useState('');
    const [sex, setSex] = useState('');
    const [birthdate, setBirthdate] = useState('');

    const onSubmitForm = (e) => {
        e.preventDefault()
        console.log(username,password,email,origin,sex, birthdate);
    }
    return (
        <div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 offset-lg-4 offset-md-4 container mt-3 bg-blue p-2 rounded-top">
                <h3 className="text-white text-center">Regístrate</h3>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 offset-lg-4 offset-md-4 container bg-white p-4 rounded-bottom">
                <form onSubmit={onSubmitForm}>
                    <div className="form-group">
                        <input type="text" className="form-control" id="username" onChange={(e) => setUsername(e.target.value)} placeholder="Usuario (Ej.: Nombre_Apellido)"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="E-mail"/>
                    </div>
                    <div className="form-group">
                        <select className="form-control" onChange={(e) => setSex(e.target.value)}>
                            <option value="0">Sexo</option>
                            <option value={constant.SEX_MALE}>Masculino</option>
                            <option value={constant.SEX_FEMALE}>Femenino</option>
                            <option value={constant.SEX_OTHER}>Otro</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <select className="form-control" onChange={(e) => setOrigin(e.target.value)}>
                            <option value="-1">Procedencia</option>
                            <option value={constant.FROM_LOS_SANTOS}>Los Santos</option>
                            <option value={constant.FROM_SAN_FIERRO}>San Fierro</option>
                            <option value={constant.FROM_LAS_VENTURAS}>Las Venturas</option>
                            <option value={constant.FROM_LIBERTY_CITY}>Liberty City</option>
                            <option value={constant.FROM_VICE_CITY}>Vice City</option>
                            <option value={constant.FROM_OTHER_CITY}>Otro</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <DatePicker dateFormat="d/M/Y" className="form-control width-100" placeholderText="Fecha de nacimiento" selected={birthdate} onChange={ (date) => setBirthdate(moment(date).format("Y-m-d")) }/>
                    </div>
                    <button className="btn btn-blue width-100" type="submit">Registrarme</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
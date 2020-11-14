usinimport React, {useState} from 'react';

import AuthService from '../../services/AuthService';
import createResponse from '../../tools/ResponseTools';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        AuthService
            .login(username, password)
            .then(response =>{
                if(response.error){
                    setError(response.error.toString());
                }
                if(response.data){
                    setSuccess("Te has logueado correctamente.");
                }
            })
            .catch(error =>{
                console.log(error);
                setError(error);
            })
    }

    return (
        <div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 offset-lg-4 offset-md-4 container mt-3 bg-blue p-2 rounded-top">
                <h3 className="text-white text-center">Ingresar</h3>
            </div>

                <form onSubmit={onSubmitForm}>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 offset-lg-4 offset-md-4 container bg-white p-4 rounded-bottom">
                        {
                            error !== '' ?
                                (<div className="alert alert-danger text-center" role="alert">
                                    {error}
                                </div>)
                            : null
                        }
                        {
                            success !== '' ?
                                (<div className="alert alert-success text-center" role="alert">
                                    {success}
                                </div>)
                            : null
                        }
                        <div className="form-group">
                            <input type="text" className="form-control" id="username" placeholder="Usuario" onChange={onChangeUsername} value={username} required/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="password" placeholder="Contraseña" onChange={onChangePassword} value={password} required/>
                        </div>
                        <button type="submit" className="btn btn-blue width-100">Login</button>
                    </div>
                </form>
        </div>
    );
}

export default Login;
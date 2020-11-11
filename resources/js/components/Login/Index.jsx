import React, {useState} from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const postData = () => {
        console.log('post');
        axios.post('http://localhost:8000/api/login', {
            name: username,
            password
        }).then((response) => {
            setError('');
            console.log(response.data);
        }).catch((error) => {
            setError(error.request.response);
            console.log(error.request.response);
        });
    }

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 offset-lg-4 offset-md-4 container mt-3 bg-blue p-2 rounded-top">
                <h3 className="text-white text-center">Ingresar</h3>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 offset-lg-4 offset-md-4 container bg-white p-4 rounded-bottom">
                {
                    error !== '' ?
                        (<div className="alert alert-danger" role="alert">
                            {error}
                        </div>)
                    : null
                }
                <div className="form-group">
                    <input type="text" className="form-control" id="username" placeholder="Usuario" onChange={onChangeUsername}/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="password" placeholder="Contraseña" onChange={onChangePassword}/>
                </div>
                <button className="btn btn-blue width-100" onClick={postData}>Login</button>
            </div>
        </div>
    );
}

export default Login;
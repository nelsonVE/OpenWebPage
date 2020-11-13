import React, {useState} from 'react';
import {Formik} from 'formik';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validateSubmit = () => {
        const errors = {};
        if (!username) {
            errors.username = 'Required';
        }
        if (!password) {
            errors.password = 'Required';
        }

        return errors;
    }

    const postData = (values) => {
        axios.post('http://localhost:8000/api/login', {
            name: username,
            password
        }).then((response) => {
            setError('');
            console.log(response.data);
        }).catch((error) => {
            console.log(error)
            setError(error.request.response.replace(/['"]+/g, ''));
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
            <Formik
                initialValues={{ username: '', password: '' }}
                validate={validateSubmit}
                onSubmit={postData}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 offset-lg-4 offset-md-4 container bg-white p-4 rounded-bottom">
                            {
                                error !== '' ?
                                    (<div className="alert alert-danger text-center" role="alert">
                                        {error}
                                    </div>)
                                : null
                            }
                            <div className="form-group">
                                <input type="text" className="form-control" id="username" placeholder="Usuario" onChange={onChangeUsername} onBlur={handleBlur} value={username} required/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="password" placeholder="Contraseña" onChange={onChangePassword} onBlur={handleBlur} value={password} required/>
                            </div>
                            <button type="submit" className="btn btn-blue width-100">Login</button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default Login;
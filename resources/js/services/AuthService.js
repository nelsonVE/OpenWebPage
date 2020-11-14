import axios from 'axios';
import { API_URL } from '../config/config';


class AuthService{
    login(name, password){
        return axios.post(API_URL + '/api/auth/login', {
            name,
            password
        })
        .then(response => {
            console.log(response);
            if(response.data.access_token){
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        })
        .catch(error => {
            console.log(error);
            return error.response.data;
        });
    }

    logout(){
        localStorage.removeItem('user');
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService;
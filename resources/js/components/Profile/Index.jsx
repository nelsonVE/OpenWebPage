import React from 'react';
import AuthService from '../../services/AuthService';
import { API_URL } from '../../config/config';

function Profile(){
    const user = AuthService.getCurrentUser().user;
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 text-center mt-3">
                    <div className="container-fluid bg-blue p-2 rounded-top">
                        <h3 className="text-white text-center">Nelson Gomes</h3>
                    </div> 
                    <div className="container-fluid bg-white rounded-bottom p-3 ">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <img src={API_URL + "/images/skins/"+user.skin+".png"} width="100px" height="auto"></img>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-left">
                                <div className="progress mt-2">
                                    <div className="progress-bar progress-bar-striped bg-white border text-darkgray" role="progressbar" style={{width: 80+'%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="progress mt-2">
                                    <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: 80+'%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <br></br>
                                <span className="h4 mt-3">Dinero:</span><span className="h4 mt-3 ml-2 text-green">${user.money.toString().padStart(9, "0")}</span><br></br>
                                <span className="h4 mt-3">Edad:</span><span className="h4 mt-3 ml-2 text-darkgray">49 años</span><br></br>
                                <span className="h4 mt-3">Sexo:</span><span className="h4 mt-3 ml-2 text-darkgray">Masculino</span><br></br>
                                <span className="h4 mt-3">Procedencia:</span><span className="h4 mt-3 ml-2 text-darkgray">Los Santos</span><br></br>
                                <span className="h4 mt-3">Registrado el:</span><span className="h4 mt-3 ml-2 text-darkgray">{user.created_at}</span><br></br>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 offset-lg-1 offset-md-1 mt-3">
                    <div className="container-fluid bg-blue p-2 rounded-top">
                        <h3 className="text-white text-center">Opciones</h3>
                    </div>
                    <div className="bg-white rounded-bottom p-3">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
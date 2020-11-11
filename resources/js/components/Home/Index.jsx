import React from 'react';
import Carousel from './Carousel'

function Home() {
    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <Carousel/>
                    <div className="col-md-3 col-sm-12 col-lg-3 col-xs-12 bg-white p-4 rounded">
                        <h3 className="text-center">Información</h3>
                        <hr/>
                        IP: 127.0.0.1<br/>
                        Usuarios online: 0/100<br/>
                        Versión del cliente: 0.3.7 R-2<br/>
                        Versión de desarrollo: 0.1 alpha<br/>
                        Estatus: Online
                    </div>
                </div>
            </div>
            <div className="bg-white p-4 container">
                <h3>Bienvenido</h3>
            </div>
        </div>
    );
}

export default Home;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';



export const Redes = () => {

    return (
        <div className="row redes__smallnav">
            <div className="col">
                <div className="redes__iconos">
                    <FontAwesomeIcon icon={faInstagram} className={"redes__instagram pointer"}/>
                    <FontAwesomeIcon icon={faFacebook} className={"redes__facebook pointer"}/>
                    <FontAwesomeIcon icon={faTiktok} className={"redes__tiktok pointer"}/>
                </div>
            </div>
            <div className="col">
                <div className="redes__titulo">
                    <span>Pedí tu lista de precios escribiendo a <a href="mailto: info@inari.com.ar" className="redes__mail">info@inari.com.ar</a></span>
                </div>
            </div>
        </div>
    )
}

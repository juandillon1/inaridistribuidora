import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
// import { FooterForm } from './FooterForm';


export const Footer = () => {
    return (
        <footer>
            <div className="footer_historia">
                <h2>Nuestra Historia</h2>
                <p>
                    Esto es un texto de prueba
                    contando una historia muy bonita
                    que puede funcionar
                    o tal vez no yo que se por ahora va bien
                    espero que se pueda todo chau chau
                    Excepteur ut non nulla adipisicing consequat consequat enim. Irure voluptate do eiusmod qui culpa veniam mollit ad occaecat. Proident nostrud irure in veniam adipisicing. Deserunt sunt qui laboris enim culpa.
                </p>
            </div>
            <h5 className="footer__copyright" align="center">Copyright© Inari {new Date().getFullYear()}</h5>
            <div className="footer_contacto">
                <a href="cel:5491164602693" className="footer_contacto-texto"><FontAwesomeIcon icon={faPhoneAlt} className="footer_contacto-icono"/> +54 9 11-6460-2693</a>
                <br />
                <br />
                <a href="https://www.google.com/maps/place/Saavedra,+CABA/@-34.5477769,-58.4515826,15z/data=!4m5!3m4!1s0x95bcb6ecec1f5741:0x42502844d305770b!8m2!3d-34.5545188!4d-58.4915986" className="footer_contacto-texto"><FontAwesomeIcon icon={faMapMarkerAlt} className="footer_contacto-icono"/> C.A.B.A, Argentina</a>
            </div>
        </footer>
    )
}

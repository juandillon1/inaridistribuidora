import React from 'react'
import { navImages } from '../../../helpers/Images'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faComments, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light mt-1">
            <div className="container-fluid">
                <Link to="/">
                    <img src={navImages('./Logo.png').default} alt="logo" className="nav__logo"/>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto nav__buscar-container">
                        <form>
                            <div className="form-group m-0">
                                <input className="form-control nav__buscar" autoComplete="off" type="search" name="q" placeholder="¿Qué estás buscando?" aria-label="¿Qué estás buscando?"/>
                                <button type="submit" className="btn nav__searchbutton" value="Buscar" aria-label="Buscar">
                                        <FontAwesomeIcon icon={faSearch} className={"nav__icon"}/>
                                </button>
                            </div>
                        </form>
                    </ul>
                    <ul className="nav__center">
                        <li className="nav-item pointer">
                            <Link to="/d/ayuda" className="nav__decoration">
                                <p className="nav__botones">
                                    <FontAwesomeIcon icon={faComments} className={"nav__icon nav__help"}/>
                                    <br/>
                                    <span>Ayuda</span>
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item pointer">
                            <Link to="/d/micuenta" className="nav__decoration">
                                <p className="nav__botones">
                                    <FontAwesomeIcon icon={faUser} className={"nav__icon nav__user"}/>
                                    <br/>
                                    <span>Mi Cuenta</span>
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item pointer nav__shoppingcart">
                            <Link to="/d/micarrito" className="nav__decoration">
                                <p className="nav__botones">
                                    {/* Carrito */}
                                    <svg height="32" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg" className="nav__shoppingcart-icon">
                                        <circle cx="8" cy="21" fill="none" r="2"strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                        <circle cx="20" cy="21" fill="none" r="2"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                        <path d="M5.67,6H23l-1.68,8.39a2,2,0,0,1-2,1.61H8.75a2,2,0,0,1-2-1.74L5.23,2.74A2,2,0,0,0,3.25,1H1"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                    </svg>
                                    <br/>
                                    <span>Mi Carrito</span>
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

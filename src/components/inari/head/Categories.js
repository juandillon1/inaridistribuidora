import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import {
    Link
} from "react-router-dom";
export const Categories = () => {
    return (
        <nav>
            <ul className="categories__categories">
                <li className="categories__list">
                    <Link to="/d/sushi">
                        Sushi
                        <FontAwesomeIcon icon={faSortDown} className="categories__icon"/>
                    </Link>
                </li>
                {/* <li className="categories__list">
                    <a href="https://google.com">
                        Almacén
                        <FontAwesomeIcon icon={faSortDown} className="categories__icon" />
                    </a>
                </li>
                <li className="categories__list">
                    <a href="https://google.com">
                        Condimentos
                        <FontAwesomeIcon icon={faSortDown} className="categories__icon"/>
                    </a>
                </li> */}
                <li className="categories__list">
                    <Link to="/d/bebidas">
                        Bebidas
                        <FontAwesomeIcon icon={faSortDown} className="categories__icon"/>
                    </Link>
                </li>
                {/* <li className="categories__list">
                    <a href="https://google.com">
                        Snaks
                        <FontAwesomeIcon icon={faSortDown} className="categories__icon"/>
                    </a>
                </li> */}
                <li className="categories__list">
                    <Link to="/d/contacto">
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { srcImages } from '../../../../helpers/Images'

export const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active carousel__button" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className="carousel__button"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className="carousel__button"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={srcImages('./Banner-TEST.jpg').default} className="d-block w-100" alt="..." height="480px"/>
                </div>
                <div className="carousel-item">
                    <img src={srcImages('./Banner-TEST.jpg').default} className="d-block w-100" alt="..." height="480px" width="720px"/>
                </div>
                <div className="carousel-item">
                    <img src={srcImages('./Banner-TEST.jpg').default} className="d-block w-100" alt="..." height="480px" width="720px"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <FontAwesomeIcon icon={faAngleLeft} className={"carousel__arrow"}/>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <FontAwesomeIcon icon={faAngleRight} className={"carousel__arrow"}/>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

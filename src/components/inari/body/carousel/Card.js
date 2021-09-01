import React from 'react'
import { srcImages } from '../../../../helpers/Images'

export const Card = ({img, producto, precioAnterior, precioActual, porcentajeDescuento}) => {
    return (
        <div className="card__center">
            <div className="card__imgbox">
                <img src={srcImages('./TESTSOJA.png').default} alt="TEST" className="mt-4"/>
                {
                    porcentajeDescuento > 0 &&
                        <span className="card__hotspan">🔥 {porcentajeDescuento}% Off 🔥</span>
                }
            </div>
            <div className="card__content">
                <h4 className="card__producto">{producto}</h4>
                <p className="card__price-container">
                    <strike className="card__strike">${precioAnterior}</strike>
                    <span className="card__price">${precioActual}</span>
                </p>
                <button className="btn btn-primary card__addcart">Agregar al carrito</button>
            </div>
        </div>
    )
}

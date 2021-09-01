import React from 'react';
// import reactDom from 'react-dom';
import { CarouselHTML } from '../carousel/Carousel';

export const TopProducts = () => {
    const topProducts = [
      {
        id: 1,
        producto: 'Salsa de Soja',
        precioAnterior: 30,
        precioActual: 12,
        porcentajeDescuento: 60
      },
      {
        id: 2,
        producto: 'Kit Sushi Basics',
        precioAnterior: 2460,
        precioActual: 1722,
        porcentajeDescuento: 30
      },
      {
        id: 3,
        producto: 'Panko Naranja 1 Kg',
        precioAnterior: 941,
        precioActual: 847,
        porcentajeDescuento: 10
      },
      {
        id: 4,
        producto: 'Panko Blanco 1Kg',
        precioAnterior: 941,
        precioActual: 847,
        porcentajeDescuento: 10
      },
      {
        id: 5,
        producto: 'Sake Hakustsuru Sayuri Nigori 300 ml',
        precioAnterior: 2004,
        precioActual: 1904,
        porcentajeDescuento: 5
      },
      {
        id: 6,
        producto: 'Arrocera Vaporera para Sushi Narda Lepes',
        precioAnterior: 6640,
        precioActual: 5976,
        porcentajeDescuento: 10
      },
      {
        id: 7,
        producto: 'Recarga de Salmon Dill Indo Deli 65gr',
        precioAnterior: 294,
        precioActual: 235,
        porcentajeDescuento: 15
      },
      {
        id: 8,
        producto: 'Pimenton Premium San Giorgio 40 gr',
        precioAnterior: 459,
        precioActual: 137,
        porcentajeDescuento: 70
      },
    ];

    return (
        <div>
            <h3 align="center" className="topproducts__titulo">Productos HOT 🔥</h3>
            <div className="container mb-3">
              <div className="row" id="columnProducts">
                  <CarouselHTML items={topProducts}/>
              </div>
            </div>
        </div>
    )
}

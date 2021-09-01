import React from 'react'
import Carousel from 'react-elastic-carousel';
import { Card } from './Card';
import  Item  from './Item';

export const CarouselHTML = ({items = []}) => {
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4}
    ]
    return (
        <Carousel breakPoints={breakPoints}>
            {
                items.map(({id, producto, precioAnterior, precioActual, porcentajeDescuento}) => {
                    return(
                        <Item key={id}>
                            <Card producto={producto} precioAnterior={precioAnterior} precioActual={precioActual} porcentajeDescuento={porcentajeDescuento}/>
                        </Item>
                    )
                })
            }
        </Carousel>
    )
}

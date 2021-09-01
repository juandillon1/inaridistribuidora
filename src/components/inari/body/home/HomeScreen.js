import React from 'react'
import { Carousel } from './Carousel'
import { MostPicked } from './MostPicked'
import { TopProducts } from './TopProducts'

export const HomeScreen = () => {
    return (
        <div>
            <Carousel />
            <TopProducts />
            <MostPicked />
        </div>
    )
}

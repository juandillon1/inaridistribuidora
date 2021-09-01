import React from 'react'
import { useSelector } from 'react-redux'
// import { SideBar } from '../SideBar'

export const SushiScreen = () => {
    const {sushi} = useSelector(state => state.products);
    console.log(sushi)
    return (
        <div className="sushiscreen__container">
            {/* <SideBar /> */}
            <div className="sushiscreen__row">
                <div className="sushiscreen__column">
                    <div className="card">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_647028-MLA44627314375_012021-O.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="sushiscreen__column">
                    <div className="card">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_647028-MLA44627314375_012021-O.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="sushiscreen__column">
                    <div className="card">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_647028-MLA44627314375_012021-O.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="sushiscreen__column">
                    <div className="card">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_647028-MLA44627314375_012021-O.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="sushiscreen__column">
                    <div className="card">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_647028-MLA44627314375_012021-O.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="sushiscreen__column">
                    <div className="card">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_647028-MLA44627314375_012021-O.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="sushiscreen__column">
                    <div className="card">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_647028-MLA44627314375_012021-O.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="sushiscreen__column">
                    <div className="card">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_647028-MLA44627314375_012021-O.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="sushiscreen__column">
                    <div className="card">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_647028-MLA44627314375_012021-O.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

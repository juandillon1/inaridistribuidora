import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Redirect, Switch} from 'react-router-dom';
import { Categories } from '../components/inari/head/Categories';
import { Redes } from '../components/inari/head/Redes';
import { Nav } from '../components/inari/head/Nav';
import { Footer } from '../components/inari/footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/products';
import { verificarToken } from '../actions/login';
import { ToastContainer } from 'react-toastify';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
// LLamado a rutas
import { AuthRouter } from './AuthRouter';
import { RoutesPu } from './RoutesPu';
import { RoutesPr } from './RoutesPr';
import { HomeScreen } from '../components/inari/body/home/HomeScreen';



export const AppRouter = () => {
    const dispatch = useDispatch();
    const {usuario} = useSelector(state => state.auth);
    const [isLoggedIn, setisLoggedIn] = useState(false);
    useEffect(() => {
        dispatch(listProducts());
        dispatch(verificarToken());
    }, [dispatch]);
    useEffect(() => {
        if(usuario && usuario.id){
            setisLoggedIn(true);
        } else{
            setisLoggedIn(false);
        }
    }, [usuario]);
    return (
        <>
            <Router>
                <div>
                    <Redes />
                    <Nav />
                    <hr />
                    <Categories />
                    <hr />
                    {/* <img src="https://img.icons8.com/color/96/000000/whatsapp--v1.png" className="whatsapp" width="70px"/> */}
                    <Switch>
                        <PublicRoute isLogin={isLoggedIn} component={HomeScreen} exact path="/" />
                        <PublicRoute isLogin={isLoggedIn} component={RoutesPu} path="/d" />
                        <PublicRoute isLogin={isLoggedIn} component={AuthRouter} path="/auth" />
                        <PrivateRoute isLogin={isLoggedIn} component={RoutesPr} path="/p" />
                        <Redirect to="/" />
                    </Switch>
                    <ToastContainer />
                    <Footer />
                </div>
            </Router>
        </>
    )
}

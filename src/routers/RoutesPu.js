import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { MicuentaScreen } from '../components/inari/body/micuenta/MicuentaScreen';
import { MicarritoScreen } from '../components/inari/body/micarrito/MicarritoScreen';
import { AyudaScreen } from '../components/inari/body/ayuda/AyudaScreen';
import { BebidasScreen } from '../components/inari/body/Categories/bebidas/BebidasScreen';
import { ContactoScreen } from '../components/inari/body/ContactoScreen';
import { HomeScreen } from '../components/inari/body/home/HomeScreen';
import { SushiScreen } from '../components/inari/body/Categories/sushi/SushiScreen';
export const RoutesPu = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/d/inicio" component={HomeScreen} />
                <Route exact path="/d/sushi" component={SushiScreen} />
                <Route exact path="/d/bebidas" component={BebidasScreen}/>
                <Route exact path="/d/ayuda" component={AyudaScreen}/>
                <Route exact path="/d/micuenta" component={MicuentaScreen}/>
                <Route exact path="/d/micarrito" component={MicarritoScreen}/>
                <Route exact path="/d/contacto" component={ContactoScreen}/>
            </Switch>
        </div>
    )
}

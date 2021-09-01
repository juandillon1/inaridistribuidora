import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { DatosScreen } from '../components/inari/body/micuenta/DatosScreen'

export const RoutesPr = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/p/datos" component={DatosScreen}/>
            </Switch>
        </div>
    )
}

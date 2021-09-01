import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginScreen } from '../components/inari/body/micuenta/LoginScreen';
import { RegisterScreen } from '../components/inari/body/micuenta/RegisterScreen';


export const AuthRouter = () => {
    return (
        <div>
            <div>
                <Switch>
                    <Route exact path="/auth/login" component={LoginScreen}/>,
                    <Route exact path="/auth/registro" component={RegisterScreen}/>
                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
        </div>
    )
}

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({isLogin, component: Component, ...rest}) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            isLogin ?
                <Redirect to="/p/datos" />
            : <Component {...props} />
        )} />
    );
};
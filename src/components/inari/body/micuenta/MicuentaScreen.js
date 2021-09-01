import React from 'react'
import { useSelector } from 'react-redux';
import { DatosScreen } from './DatosScreen';

import { LoginScreen } from './LoginScreen';

export const MicuentaScreen = () => {
    const { usuario } = useSelector( state => state.auth );
    return (
        <>
            {
                (usuario)
                ?
                    <DatosScreen />
                :
                    <LoginScreen />
            }
        </>
    )
}

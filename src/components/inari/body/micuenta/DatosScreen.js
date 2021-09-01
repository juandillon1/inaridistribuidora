import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment';
import { comenzarCarga, guardarUsuario, logout, verificarToken } from '../../../../actions/login';
import { Redirect } from 'react-router-dom';


export const DatosScreen = () => {
    const dispatch = useDispatch();
    const {usuario} = useSelector(state => state.auth);
    const {nombre, apellido, fNacimiento, img} = usuario;
    const handleLogOut = () => {
        localStorage.removeItem('token');
        dispatch(logout());
        <Redirect to="" />
    };
    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file){
            dispatch(comenzarCarga(file));
        }
    };
    const handleSave = () => {
        dispatch(guardarUsuario());
    };
    return (
        <div align="center">
            Estos son los datos de tu cuenta...
            <h1>{nombre} {apellido}</h1>
            <p>{moment(fNacimiento).format('DD-MM-YYYY')}</p>
            <img src={img} className="rounded-circle mb-5" width="350px" height="350px" alt="img"/>
            {/* BTN para subir imagenes */}
            <input type="file" id="fileSelector" name="file" style={{display: 'none'}} onChange={handleFileChange}/>
            <div className="m-3">
                <button className="btn btn-info m-2" onClick={handlePictureClick}>Picture</button>
                <button className="btn btn-success" onClick={handleSave}>Save</button>
            </div>
            <button className="btn btn-danger mt-5 mb-3" onClick={handleLogOut}>Cerrar Sesión</button>
        </div>
    )
}

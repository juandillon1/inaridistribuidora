import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../../../actions/login';
import { useForm } from '../../../../hooks/useForm';

export const LoginScreen = () => {
    const dispatch = useDispatch();
    const [formValues, handleInputChange, reset] = useForm();
    const {email, password} = formValues;
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            email,
            password
        }));
    }

    return (
        <form align="center" className="p-5" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" value={ email || '' } className="form-control" placeholder="Ingrese su correo electrónico" aria-describedby="emailHelp" onChange={handleInputChange}/>
                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input type="password" name="password" value={ password || '' } className="form-control" placeholder="Ingrese su contraseña" onChange={handleInputChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Ingresar</button>
            <div className="mb-3 mt-3">
                <span>¿No tenes cuenta? Registrate!</span>
            </div>
            <div className="mb-3">
                <Link to="/auth/registro" className="btn btn-primary">Registrarse</Link>
            </div>
        </form>
    )
}

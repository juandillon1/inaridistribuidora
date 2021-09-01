import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../../../hooks/useForm';
import { registro } from '../../../../actions/login';
import validator from 'validator';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Link } from 'react-router-dom';
import { toastMsg } from '../../../../helpers/toast';

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const [formValues, handleInputChange, handleDateChange, reset] = useForm();
    const {nombre, apellido, email, password, password2, fNacimiento= new Date()} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isValid()){
            dispatch(registro({
                email,
                password,
                nombre,
                apellido,
                fNacimiento
            }));
            reset();
        }
    }
    const isValid = () => {
        if(!passwordValid()){
            toastMsg("La contraseña tiene que tener mínimo 6 caracteres, un caracter especial (@*$&!), números y una mayúscula", 'error');
            return false;
        } else if(!email || !validator.isEmail(email)){
            toastMsg("El mail es inválido", 'error');
            return false;
        } else if( !nombre || nombre.trim().length < 3){
            toastMsg("El nombre debe contener al menos 3 caracteres", 'error');
        } else if(!apellido || apellido.trim().length < 3){
            toastMsg("El apellido debe contener al menos 3 caracteres", 'error');
        }
        return true;
    }
    const passwordValid = () => {
        const regexCarEspecial = new RegExp('[!$@&*]');
        const regexMayus = new RegExp('[A-Z]');
        const regexNum = new RegExp('[1-9]');
        if( !password || !password2 || password !== password2 ){
            toastMsg("Las contraseñas no coinciden", 'error');
            return false;
        } else if(password.length < 6){
            return false;
        } else if(!regexCarEspecial.exec(password)){
            return false;
        } else if(!regexMayus.exec(password)){
            return false;
        } else if(!regexNum.exec(password)){
            return false;
        }
        return true;
    }
    const handleFnacimiento = (date) => {
        handleDateChange('fNacimiento', date);
    }
    const handlePaste = (e) => {
        e.preventDefault();
        toastMsg('No está permitido pegar datos en este campo', 'error');
    }
    return (
        <form align="center" className="p-5" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" name="nombre" value={ nombre || '' } className="form-control" placeholder="Ingrese su nombre" onChange={handleInputChange}/>
                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-3">
                <label className="form-label">Apellido</label>
                <input type="text" name="apellido" value={ apellido || '' } className="form-control" placeholder="Ingrese su apellido" onChange={handleInputChange}/>
                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" value={ email || '' } className="form-control" placeholder="Ingrese su correo electrónico" aria-describedby="emailHelp" onChange={handleInputChange}/>
                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input type="password" name="password" value={ password || '' } className="form-control" placeholder="Ingrese su contraseña" onChange={handleInputChange}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Vuelva a ingresar la contraseña</label>
                <input type="password" id="password2" name="password2" value={ password2 || '' } className="form-control" placeholder="Ingrese nuevamente la contraseña" onChange={handleInputChange} onPaste={handlePaste}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Ingrese su fecha de nacimiento</label>
            </div>
            <div className="mb-3">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        name="fNacimiento"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-dialog"
                        value={fNacimiento}
                        onChange={handleFnacimiento}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </div>
            <div className="mb-3">
                <span>¿Ya tenés una cuenta?</span>
            </div>
            <div className="mb-3">
                <Link to="auth/login" className="btn btn-primary">Ingresar</Link>
            </div>
        </form>
    )
}

import { fetchConToken, fetchSinToken } from "../helpers/fetch"
import { fileUpload } from "../helpers/fileUpload"
import { toastMsg } from "../helpers/toast"
import { types } from "../types/types"

export const login = ( usuario ) => {
    return async( dispatch ) =>  {
        try{
            const login = await fetchSinToken('auth', usuario, 'POST')
            const body = await login.json();
            if(body.ok){
                localStorage.setItem('token', body.token);
                dispatch(setLogin({
                    id: body.uid,
                    nombre: body.nombre,
                    apellido: body.apellido,
                    fNacimiento: body.fNacimiento,
                    email: body.email,
                    password: body.password,
                    img: body.img
                }));
            } else{
                toastMsg(body.msg, 'error');
            }
        } catch(err){
            console.log(err)
        }
    }
}

const setLogin = ( usuario ) => (
    {
        type: types.setLogin,
        payload: usuario
    }
)

export const logout = () => ({
    type: types.logout
})

export const registro = ( usuario ) => {
    return async(dispatch) => {
        try{
            usuario.img = "";
            const registro = await fetchSinToken('auth/new', usuario, 'POST');
            const body = await registro.json();
            localStorage.setItem('token', body.token);
            dispatch(setRegistro({
                id: body.uid,
                nombre: body.nombre,
                apellido: body.apellido,
                fNacimiento: body.fNacimiento,
                email: body.email,
                password: body.password,
                img: body.img
            }));
            if(body.ok){
                toastMsg('Usuario Creado con éxito!', 'success');
            } else{
                toastMsg(body.msg, 'error');
            }

        } catch(err){
            console.log(err, 'error')
        }
    }
}

export const setRegistro = ( usuario ) => (
    {
        type: types.setRegistro,
        payload: usuario
    }
)

export const verificarToken = () => {
    try{
        return async( dispatch ) => {
            const token = localStorage.getItem('token') || '';
            if( token !== '' ){
                const renovar = await fetchConToken('auth/renew', {});
                const body = await renovar.json();
                localStorage.setItem('token', body.token);
                dispatch(setLogin({
                    id: body.uid,
                    nombre: body.nombre,
                    apellido: body.apellido,
                    fNacimiento: body.fNacimiento,
                    email: body.email,
                    password: body.password,
                    img: body.img
                }))
            }
        }
    } catch(err){
        console.log(err)
    }
}

export const comenzarCarga = (file) => {
    return async(dispatch, getState) =>  {
        const {usuario} = getState().auth;
        toastMsg('Cargando imagen...', 'warning');
        const borrarImgAnt = await fetchConToken(`auth/deleteimg/${usuario.id}`, {}, 'DELETE');
        await borrarImgAnt.json();
        // Aca va cartel
        const fileUrl = await fileUpload(file, usuario.id);
        usuario.img = fileUrl;
        delete usuario.password;
        delete usuario.email;
        dispatch(refrescarUsuario(usuario));
        toastMsg('', 'cerrar')
    }
}

export const guardarUsuario = () => {
    return async ( dispatch, getState ) => {
        const {usuario} = getState().auth;
        const id = usuario.id;
        delete usuario.password;
        delete usuario.email;
        delete usuario.id
        toastMsg('Guardando Usuario...', 'warning');
        const update = await fetchConToken(`auth/update/${id}`, usuario, 'PUT');
        const body = await update.json();
        localStorage.setItem('token', body.token);
        dispatch(refrescarUsuario(body.usuario));
        toastMsg('', 'cerrar');
        toastMsg('Usuario guardado con éxito!', 'success');
        // Cartel finalizado
    }
};

export const refrescarUsuario = (usuario) => ({
    type: types.usuarioActualizado,
    payload: usuario
});
import { types } from "../types/types";


export const authReducer = (state={}, action) =>{
    switch(action.type){
        case types.login:
            return {
                ...state
            }
        case types.setLogin:
            return {
                ...state,
                usuario: action.payload
            }
        case types.logout:
            return {
                ...state,
                usuario: {}
            }
        case types.registro:
            return {
                ...state
            }
        case types.setRegistro:
            return {
                ...state,
                usuario: action.payload
            }
        case types.usuarioActualizado:
            return {
                ...state,
                usuario: action.payload
            }
        default:
            return state
    }
}
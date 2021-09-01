import { types } from "../types/types";

const initialState = {
    sushi: {},
    bebidas: {}
}

export const productReducer = ( state=initialState, action ) => {
    switch( action.type ) {
        case types.productosList:
            return {
                ...state,
            }
        default:
            return state;
    }
};
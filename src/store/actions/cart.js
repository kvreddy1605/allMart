import * as actionTypes from './actionTypes';

export const addToCart = productId => {
    return {
        type: actionTypes.ADD_TO_CART,
        productId: productId
    }
}

export const removeCartItem = productId => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        cartItemToRemoveId: productId
    }
}

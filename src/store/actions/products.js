import * as actionTypes from './actionTypes';

export const fetchProducts = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS
    }
}

export const fetchProductsStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_START
    }
}

export const fetchProductsSuccess = products => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        products: products.data
    }
}

export const fetchProductsFail = error => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAIL,
        error: error
    }
}

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

export const searchProducts = searchString => {
    return {
        type: actionTypes.SEARCH_PRODUCTS,
        searchString: searchString,
    }
}


import * as actionTypes from '../actions/actionTypes';
 
const initialState = {
    cartList: []
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
            case actionTypes.ADD_TO_CART:
                return {
                    ...state,
                    cartList: [
                        ...state.cartList,
                        action.productId
                    ]
                }
            case actionTypes.REMOVE_FROM_CART:
                const newCartList = state.cartList.filter( cartItemId => {
                    return cartItemId !== action.cartItemToRemoveId;
                });
                return {
                    ...state,
                    cartList: [
                        ...newCartList
                    ]
                }
            default: return state;
    }
};

export default reducer;
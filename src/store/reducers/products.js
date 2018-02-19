import * as actionTypes from '../actions/actionTypes';
 
const initialState = {
    productsList: [],
    loading: false,
    error: false,
    cartList: [],
    searchString: ""
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_PRODUCTS_START:
            return {
                ...state,
                loading: true
            }
            case actionTypes.FETCH_PRODUCTS_SUCCESS:
                return {
                    ...state,
                    productsList: action.products,
                    loading: false
                }
            case actionTypes.FETCH_PRODUCTS_FAIL:
                return {
                    ...state,
                    loading: false,
                    error: true
                }
            case actionTypes.SEARCH_PRODUCTS:
                return {
                    ...state,
                    searchString: action.searchString
                }
                
            default: return state;
    }
};

export default reducer;
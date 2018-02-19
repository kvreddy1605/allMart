import { createSelector } from 'reselect';

const productsListSelector = state => state.products.productsList;
const searchStringSelector = state => state.products.searchString;

const getSearchedProducts = (productsList, searchString) => {
    const searchedProducts = productsList.filter( product => { 
        return product.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
    })
    return searchedProducts;
}

export default createSelector(
    productsListSelector,
    searchStringSelector,
    getSearchedProducts
)
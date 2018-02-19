import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import classes from './Products.scss';
import Product from '../../components/Product/Product';
import Spinner from '../../components/UI/Spinner/Spinner';
import Search from '../../components/Search/Search';
import SearchedProductsSelector from '../../selectors/searchedProducts';

class Products extends Component{
    

    componentDidMount(){
        this.props.onFetchProducts();
    }

    addToCartHandler = (productId) => {
        this.props.onAddToCart(productId);
    }

    onSearchHandler = (e) => {
        this.props.onSearch(e.target.value);
    }

    createProductsForDisplay = (productsList) => {
        return productsList.map( product => (
            <Product key={product.id}
                product={product}
                addToCart={ this.addToCartHandler.bind(this, product.id)}
            />
        ));
    }

    render() {
        let products = this.props.error? <p>Oops! Something went wrong and could not fetch products</p> : <Spinner />;
        if( this.props.products.length>0 ){
            products = this.createProductsForDisplay(this.props.products);
        }
        if( this.props.searchedProducts.length !== 0 ){
            products = this.createProductsForDisplay(this.props.searchedProducts);
        }

        return (
            <div className={classes.ProductsPage}>
                <div className={ classes.CategoryFilters }>
                    <p>Search for your Product</p>
                    <Search onSearch={this.onSearchHandler} />
                </div>
                <div className={ classes.Products } >
                    {products}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.productsList,
        loading: state.products.loading,
        error: state.products.error,
        searchedProducts: SearchedProductsSelector(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchProducts: () => dispatch(actions.fetchProducts()),
        onAddToCart: (productId) => dispatch(actions.addToCart(productId)),
        onSearch: (searchString) => dispatch(actions.searchProducts(searchString))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
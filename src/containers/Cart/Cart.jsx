import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Cart.scss';
import CartItem from '../../components/CartItem/CartItem';
import * as actions from '../../store/actions';

class Cart extends Component{
    
    removeCartItemHandler = (productId) => {
        this.props.onRemoveCartItem(productId);
    }

    render() {
        let cart = <div>Your Cart looks empty. Shop Now.</div>
        if(this.props.cartItemIdList.length>0){
            const cartItems = this.props.productsList.filter( product => (
                this.props.cartItemIdList.includes(product.id)
            ));
            cart = cartItems.map( cartItem => (
                <CartItem key={ cartItem.id }
                    cartItem={ cartItem }
                    removeItem = { () => this.removeCartItemHandler( cartItem.id ) }
                />
            ));
        }
        
        return (
            <div className={ classes.Cart } >
                 { cart }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cartItemIdList: state.cart.cartList,
        productsList: state.products.productsList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveCartItem: (productId) => dispatch(actions.removeCartItem(productId))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

import React from 'react';
import classes from './CartItem.scss';
import Button from '../../components/UI/Button/Button';

const cartItem = (props) => {
    return (
        <div className={ classes.CartItem }>
            <img src={props.cartItem.image_url} alt="product" />
            <div className={ classes.ProductDesc }>
                <div>{props.cartItem.name}</div>
            </div>
            <div>
                <div>Price: $ 90</div>
                <Button clicked={props.removeItem} btnType="Danger">Remove Item</Button>
            </div>
        </div>
    );
}

export default cartItem;
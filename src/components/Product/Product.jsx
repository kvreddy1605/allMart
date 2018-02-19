import React from 'react';
import classes from './Product.scss';
import Button from '../UI/Button/Button';

const Product = (props) => {
    return (
        <div className={ classes.Product }>
            <img src={props.product.image_url} alt="product" />
            <div className={ classes.ProductDesc }>
                <div>{props.product.name}</div>
                <div>Price: $ 90</div>
                <Button clicked={props.addToCart} btnType="Primary">Add to Cart</Button>
            </div>
        </div>
    );
}

export default Product;
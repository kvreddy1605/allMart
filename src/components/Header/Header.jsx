import React, { Component } from 'react';
import classes from './Header.scss';
import { NavLink } from 'react-router-dom';

class Header extends Component{
    render() {
        return (
            <div className={classes.Header}>
                <nav>
                    <span>AllMart</span>
                    <ul>
                        <li><NavLink exact to="/">Products</NavLink></li>
                        <li><NavLink to="/cart">Cart</NavLink></li>
                        <li><NavLink to="/sign-in">Account</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;
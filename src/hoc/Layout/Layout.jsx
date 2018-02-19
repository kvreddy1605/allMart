import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Aux from '../Auxiliary/Auxiliary';
import classes from "./Layout.scss";

class Layout extends Component{
    render() {
        return (
            <Aux>
                <Header />
                <main className={classes.PageContent}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;
import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout.jsx';
import { Route, Switch } from 'react-router-dom';


import Products from './containers/Products/Products';
import Cart from './containers/Cart/Cart';
import SignIn from './containers/Auth/SignIn/SignIn';
import SignUp from './containers/Auth/SignUp/SignUp';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/" exact component={Products} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

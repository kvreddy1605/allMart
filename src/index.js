import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.js';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from "redux-saga";

import productsReducer from './store/reducers/products';
import authReducer from './store/reducers/auth';
import cartReducer from './store/reducers/cart';
import { watchProducts } from './store/sagas/index';

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer
})

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,    
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchProducts);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app, document.getElementById('root'));


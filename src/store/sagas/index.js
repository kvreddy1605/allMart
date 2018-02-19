import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from "../actions/actionTypes";
import { fetchProductsSaga } from './products';

export function* watchProducts() {
    yield takeEvery(actionTypes.FETCH_PRODUCTS, fetchProductsSaga);
}
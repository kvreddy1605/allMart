import { put } from "redux-saga/effects";
import * as actions from "../actions";
import axios from "axios";

export function* fetchProductsSaga(action){
    yield put(actions.fetchProductsStart());
    try {
        const response = yield axios.get('https://api.punkapi.com/v2/beers');
        yield put(actions.fetchProductsSuccess(response)); 
    } catch (error) {
        yield put(actions.fetchProductsFail(error));
    }
}
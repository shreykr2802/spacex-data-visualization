import { put } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from '../../axios-url';

interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}

export function* spaceXDataSaga() {
    try{
        const response: ResponseGenerator = yield axios.get("/");
        yield put(actions.fetchataSuccess(response.data));
    } catch(error) {
        yield put(actions.fetchDataFailed(error))
    }
}

export default spaceXDataSaga;
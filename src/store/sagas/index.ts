import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import spaceXDataSaga from './spaceXSaga';

import {SPACEX_DATA_FETCH_START} from '../actions/actionTypes';

export function* watchSpaceXData() {
    yield takeEvery(SPACEX_DATA_FETCH_START, spaceXDataSaga);
}


export default { watchSpaceXData }
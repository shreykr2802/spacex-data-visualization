import { put } from "redux-saga/effects";
import axios from "../../axios-url";

import { fetchDataSuccess, fetchDataFailed } from "../slices/spaceXSlice";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export function* spaceXDataSaga() {
  try {
    const response: ResponseGenerator = yield axios.get("/");
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailed(error));
  }
}

export default spaceXDataSaga;

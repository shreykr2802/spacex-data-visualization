import { takeEvery } from "redux-saga/effects";
import spaceXDataSaga from "./spaceXSaga";
import { fetchDataStart } from "../slices/spaceXSlice";

export function* watchSpaceXData() {
  yield takeEvery(fetchDataStart, spaceXDataSaga);
}

export default watchSpaceXData;

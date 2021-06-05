import {
  SPACEX_DATA_FETCH_FAILED,
  SPACEX_DATA_FETCH_START,
  SPACEX_DATA_FETCH_SUCESS,
} from "../actions/actionTypes";

interface SpaceXDataState {
  data: any[];
  error: string;
  loading: boolean;
}

interface Action {
  type: string;
  payload: any;
}

const initialSate: SpaceXDataState = {
  data: [],
  error: "",
  loading: false,
};

const fetchDataStart = (state: SpaceXDataState, action: Action) => {
  return {
    ...state,
    error: null,
    loading: true,
  };
};

const fetchDataSuccess = (state: SpaceXDataState, action: Action) => {
  return {
    ...state,
    error: null,
    loading: false,
    data: action.payload,
  };
};

const fetchDataFailed = (state: SpaceXDataState, action: Action) => {
  return {
    ...state,
    error: action.payload,
    loading: false,
  };
};

export default (state = initialSate, action: Action) => {
  switch (action.type) {
    case SPACEX_DATA_FETCH_START:
      return fetchDataStart(state, action);
    case SPACEX_DATA_FETCH_SUCESS:
      return fetchDataSuccess(state, action);
    case SPACEX_DATA_FETCH_FAILED:
      return fetchDataFailed(state, action);
    default:
      return state;
  }
};

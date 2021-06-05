import { SPACEX_DATA_FETCH_FAILED, SPACEX_DATA_FETCH_START, SPACEX_DATA_FETCH_SUCESS } from './actionTypes';

export const fetchDataStart = () => {
    return {
        type: SPACEX_DATA_FETCH_START
    }
}

export const fetchataSuccess = (data: any) => {
    return {
        type: SPACEX_DATA_FETCH_SUCESS,
        payload: data
    }
}

export const fetchDataFailed = (error: string) => {
    return {
        type: SPACEX_DATA_FETCH_FAILED,
        payload: error
    }
}
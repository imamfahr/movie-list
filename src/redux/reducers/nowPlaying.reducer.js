import {
    GET_NOW_PLAYING_DATA,
    GET_NOW_PLAYING_DATA_SUCCESS,
    GET_NOW_PLAYING_DATA_FAILED,
} from '../actions/nowPlayingData.actions'

const initialState = {
    data: [],
    error: null,
    isLoading: false,
};

export const getNowPlayingReducer =(state=initialState,action)=>{
    switch (action.type) {
        case GET_NOW_PLAYING_DATA:
            return{
                ...state,
                isLoading: true,
            };
        case GET_NOW_PLAYING_DATA_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data : action.result,
            };
        case GET_NOW_PLAYING_DATA_FAILED:
            return{
                ...state,
                isLoading: false,
                error: action.error,
            };
        default:
            return state;
    }
}
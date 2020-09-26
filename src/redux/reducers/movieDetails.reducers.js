import axios from 'axios'
import {
    GET_MOVIE_DETAILS_DATA,
    GET_MOVIE_DETAILS_DATA_SUCCESS,
    GET_MOVIE_DETAILS_DATA_FAILED
} from '../actions/movieDetails.actions'

const initialState = {
    data: [],
    error: null,
    isLoading: false,
};

export const getMovieDetailData=(state=initialState,action)=>{
    switch(action.type){
        case GET_MOVIE_DETAILS_DATA:
            return{
                ...state,
                isLoading: true,
            }
        case GET_MOVIE_DETAILS_DATA_SUCCESS:
            return{
                ...state,
                isLoading:false,
                data:action.result,
            }
        case GET_MOVIE_DETAILS_DATA_FAILED:
            return{
                ...state,
                isLoading:false,
                error: action.error,
            }
        default:
            return state;
    }
}


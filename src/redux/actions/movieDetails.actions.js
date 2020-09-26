import axios from 'axios';
export const GET_MOVIE_DETAILS_DATA='GET_MOVIE_DETAILS_DATA';
export const GET_MOVIE_DETAILS_DATA_SUCCESS='GET_MOVIE_DETAILS_DATA_SUCCESS';
export const GET_MOVIE_DETAILS_DATA_FAILED='GET_MOVIE_DETAILS_DATA_FAILED';


export function getMovieDetailsData(data) {
    return{
        type:GET_MOVIE_DETAILS_DATA,
        payload:data,
    }
}

export function getMovieDetailDataSuccess(result) {
    return{
        type:GET_MOVIE_DETAILS_DATA_SUCCESS,
        result,
    }
}

export function getMovieDetailDataFailed(error) {
    return{
        type:GET_MOVIE_DETAILS_DATA_FAILED,
        error,
    }
}

export const getMovieDetailData =(props)=>{
    return function(dispatch){
        dispatch(getMovieDetailsData());

        axios
            .get(`https://api.themoviedb.org/3/movie/${props}?api_key=7c9426e4f0fab5637b8839e4faa339ff`)
            .then((result)=> dispatch(getMovieDetailDataSuccess(result.data)))
            .catch((error)=>dispatch(getMovieDetailDataFailed(error)));
    }
}
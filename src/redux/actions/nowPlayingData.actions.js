import axios from 'axios';
export const GET_NOW_PLAYING_DATA = 'GET_MOVIE_DATA';
export const GET_NOW_PLAYING_DATA_SUCCESS = 'GET_MOVIE_DATA_SUCCESS';
export const GET_NOW_PLAYING_DATA_FAILED = 'GET_MOVIE_DATA_FAILED';



export function getNowPlayingData (data){
    return {
        type: GET_NOW_PLAYING_DATA,
        payload:data,
    }
}

export function getNowPlayingDataSuccess (result){
    return {
        type: GET_NOW_PLAYING_DATA_SUCCESS,
        result,
    }
}

export function getNowPlayingDataFailed (error){
    return {
        type: GET_NOW_PLAYING_DATA_FAILED,
        error,
    }
}


//axios

export const getNowPlayingFromAPI =()=>{
    return function(dispatch){
        dispatch(getNowPlayingData());

        axios
            .get("https://api.themoviedb.org/3/movie/now_playing?api_key=7c9426e4f0fab5637b8839e4faa339ff")
            .then((result)=> dispatch(getNowPlayingDataSuccess(result.data)))
            .catch((error)=>dispatch(getNowPlayingDataFailed(error)));
    }
}
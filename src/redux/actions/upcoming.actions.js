import axios from 'axios'
export const GET_UPCOMING_DATA = 'GET_UPCOMING_DATA';
export const GET_UPCOMING_DATA_SUCCESS = 'GET_UPCOMING_DATA_SUCCESS';
export const GET_UPCOMING_DATA_FAILED = 'GET_UPCOMING_DATA_FAILED';

export const getUpcomingData = (data) =>{
    return{
        type :GET_UPCOMING_DATA,
        payload: data,
    }
}

export const getUpcomingDataSuccess = (result) =>{
    return{
        type :GET_UPCOMING_DATA_SUCCESS,
        result
    }
}

export const getUpcomingDataFailed = (error) =>{
    return{
        type :GET_UPCOMING_DATA_FAILED,
        error
    }
}


export const getUpcomingDatafromAPI =()=>{
    return function(dispatch){
        dispatch(getUpcomingData());

        axios
        .get('https://api.themoviedb.org/3/movie/upcoming?api_key=7c9426e4f0fab5637b8839e4faa339ff')
        .then((result)=>dispatch(getUpcomingDataSuccess(result.data)))
        .then((error)=>dispatch(getUpcomingDataFailed(error)))
    }
}
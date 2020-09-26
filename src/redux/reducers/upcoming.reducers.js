import {
    GET_UPCOMING_DATA,
    GET_UPCOMING_DATA_SUCCESS,
    GET_UPCOMING_DATA_FAILED,
} from '../actions/upcoming.actions'


const initialState = {
    data : [],
    error: null,
    isLoading: false,
};


export const getUpcomingReducer =( state = initialState, action) => {
    switch(action.type){
        case GET_UPCOMING_DATA: 
        return{
            ...state,
            isLoading: true,
        }
        case GET_UPCOMING_DATA_SUCCESS: 
        return{
            ...state,
            isLoading:false,
            data: action.result,
        }
        case GET_UPCOMING_DATA_FAILED :
        return{
            ...state,
            isLoading:false,
            error: action.error,
        }
        default:
            return state;
    }
}
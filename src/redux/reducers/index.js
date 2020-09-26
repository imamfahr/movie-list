import { combineReducers } from 'redux';
import { getNowPlayingReducer as movies } from './nowPlaying.reducer'
import {getUpcomingReducer as upcoming} from './upcoming.reducers'
import{getMovieDetailData as movieDetail} from './movieDetails.reducers'

const rootReducers = combineReducers({movies,upcoming,movieDetail});

export default rootReducers
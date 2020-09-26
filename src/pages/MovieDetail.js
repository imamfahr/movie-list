import React,{useEffect} from 'react'
import {useParams} from 'react-router'

import {useSelector, useDispatch} from 'react-redux';
import {getMovieDetailData} from '../redux/actions/movieDetails.actions'

function MovieDetail() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const movieDetailData = useSelector((state)=>state.movieDetail.data)
    console.log('movie-detail',movieDetailData);

    useEffect(()=>{
        dispatch(getMovieDetailData(id))
    },[dispatch]);


    return (
        <div>
            
            <div>Movie id : {id} </div>
            <div>Movie title : {movieDetailData.original_title}</div>
            <div>Description</div>

        </div>
    )
}

export default MovieDetail

import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import {Container} from 'react-bootstrap'

//redux
import { useSelector, useDispatch } from "react-redux";
import { getNowPlayingFromAPI } from "../redux/actions/nowPlayingData.actions";


function NowPlaying(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const listNowPlaying = useSelector((state) => state.movies.data.results);
  console.log("redux", listNowPlaying);

  useEffect(() => {
    dispatch(getNowPlayingFromAPI());
  }, [dispatch]);


  return (
    <div>
      <Container>
      <div>Now Playing</div>
      {listNowPlaying !== undefined ? (
        listNowPlaying.map((item, index) => (
          <div key={index} className='movieCard'>
            <p>{item.title}</p>
            <img src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}/>
            <p>{item.overview}</p>
            <button onClick={()=>history.push(`/movie/${item.id}`)}>Movie Details</button>
          </div>
        ))
      ) : (
        <h1>loading item</h1>
      )}
      </Container>
    </div>
  );
}

export default NowPlaying;


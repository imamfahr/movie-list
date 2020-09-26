import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

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
      <div>Now Playing</div>
      {listNowPlaying !== undefined ? (
        listNowPlaying.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <p>{item.id}</p>
            <button onClick={()=>history.push(`/movie/${item.id}`)}>Movie Details</button>
          </div>
        ))
      ) : (
        <h1>loading item</h1>
      )}
    </div>
  );
}

export default NowPlaying;

//kasih link untuk ke halaman
//fetch api untuk specific movie
//pasanng hasil fetch ke halaman specific

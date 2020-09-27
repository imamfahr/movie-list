import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {Container,Row, Col} from 'react-bootstrap'

//redux
import { useSelector, useDispatch } from "react-redux";
import { getUpcomingDatafromAPI } from "../redux/actions/upcoming.actions";

function Upcoming(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const listUpcoming = useSelector((state) => state.upcoming.data.results);
  console.log("upcoming", listUpcoming);

  useEffect(() => {
    dispatch(getUpcomingDatafromAPI());
  }, [dispatch]);

  return (
    <div className='nowPlayingPage'>
     <Container>
        <div className='nowPlayingTitle oswald'>Upcoming movie</div>
        {listUpcoming !== undefined ? (
          listUpcoming.map((item, index) => (
            <div key={index} className="movieCard flex-label">
              <Row >
                <Col lg={3} className='justify-content-md-right'>
                  <img
                    src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
                    className="mx-auto d-block"
                  />
                </Col>
                <Col lg={9}>
                    <Container className='mt-2'>
                  <p className='oswald movie-title'>{item.title}</p>
                  <p className='oswald'>Rating : {item.vote_average} </p>
                  <p className='oswald'>Popularity : {item.popularity}</p>
                  {/* <p>
                    Genre {genreData.filter((el) => el.id == item.genre_ids[0])}
                  </p> */}
                  <p className='poppins'>{item.overview}</p>
                  <button onClick={() => history.push(`/movie/${item.id}`)} className='bottomright myButton'>
                    Movie Details
                  </button>
              </Container>
                </Col>
              </Row>
            </div>
          ))
        ) : (
          <h1>loading item</h1>
        )}
    </Container>
    </div>
  );
}

export default Upcoming;

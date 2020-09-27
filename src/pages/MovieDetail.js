import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getMovieDetailData } from "../redux/actions/movieDetails.actions";

function MovieDetail(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetailData = useSelector((state) => state.movieDetail.data);
  console.log("movie-detail", movieDetailData);

  useEffect(() => {
    dispatch(getMovieDetailData(id));
  }, [dispatch]);

  return (
    <div
      style={{
        backgroundImage:
          "url(http://image.tmdb.org/t/p/original/" +
          movieDetailData.backdrop_path +
          ")",
      }}
      className="allBehindDetail"
    >
      <Container>
          <div className='movieOverview oswald'>Movie Overview</div>
        <div className="detailContainer">
          <Row>
            <Col lg={3}>
              <img
                src={`http://image.tmdb.org/t/p/w185/${movieDetailData.poster_path}`}
                className="mx-auto d-block"
              />
            </Col>
            <Col lg={9}>
                <Container className='dataContainer'>
            <div className='movieTitle-det oswald'>{movieDetailData.original_title}</div>
            <div className='releaseDate-det poppins fs-20'>{movieDetailData.release_date}</div>
            <div className='poppins fs-20'>{movieDetailData.runtime} minutes</div>
            <div className='rating-det poppins fs-20'> rate : {movieDetailData.vote_average}</div>
            <div className='pupularity-det poppins fs-20'> popularity : {movieDetailData.popularity}</div>
            </Container>
            </Col>
          </Row>
          <Row >
              <Col lg={12} className='justify-content-md-right'>
            <div className='synopsis poppins fs-20'><Container>{movieDetailData.overview}</Container></div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default MovieDetail;

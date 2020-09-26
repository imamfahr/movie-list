import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

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
    <div>
      <div>Upcoming Movies</div>
      {listUpcoming !== undefined ? (
        listUpcoming.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <p>{item.id}</p>
            <button onClick={() => history.push(`/movie/${item.id}`)}>
              Movie Details
            </button>
          </div>
        ))
      ) : (
        <h1>loading item</h1>
      )}
    </div>
  );
}

export default Upcoming;

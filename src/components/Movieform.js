import React, { useState, useEffect } from "react";
import { timeValueSet, timeInHoursSet } from "../helpers/help";
function Movieform({ handleAddMovie }) {
  const [movieName, setMovieName] = useState("");
  const [rating, setRating] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState(false);
  //formrest
  const resetForm=()=> {
      setMovieName("");
      setRating("");
      setDuration("");
  }
  //check form values
  const checkDetails = () => {
   
    if (movieName === "" || rating === "" || duration === "") {
      return;
    }
    const time = duration.slice(-1);
    if (time === "m" || time === "h") {
      const timeValue = timeValueSet(duration);
      setError(false);
      if (time === "m") {
        const timeInMinutes = timeValue / 60;
        const timeInHours = timeInHoursSet(timeInMinutes);
        handleAddMovie(movieName, Number(rating), timeInHours);
        resetForm()
      } else {
        handleAddMovie(movieName, Number(rating), timeValue);
        resetForm()
      }
    } else {
      resetForm()
      setError(true);
    }
  };
 
  useEffect(() => {
    if (movieName !== "" || rating !== "" || duration !== "") setError(false);
  }, [movieName, rating, duration]);

  return (
    <section>
      <div className="card pa-30">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="layout-column mb-15">
            <label htmlFor="name" className="mb-3">
              Movie Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Movie Name"
              data-testid="nameInput"
              value={movieName}
              onChange={(e) => setMovieName(e.target.value)}
            />
          </div>
          <div className="layout-column mb-15">
            <label htmlFor="ratings" className="mb-3">
              Ratings
            </label>
            <input
              type="number"
              id="ratings"
              placeholder="Enter Rating on a scale of 1 to 100"
              data-testid="ratingsInput"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div className="layout-column mb-30">
            <label htmlFor="duration" className="mb-3">
              Duration
            </label>
            <input
              type="text"
              id="duration"
              placeholder="Enter duration in hours(h) or minutes(m)"
              data-testid="durationInput"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {error && (
            <div className="alert error mb-30" data-testid="alert">
              Please specify time in hours or minutes (e.g. 2.5h or 150m)
            </div>
          )}
          <div className="layout-row justify-content-end">
            <button
              type="submit"
              className="mx-0"
              data-testid="addButton"
              onClick={checkDetails}
            >
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Movieform;
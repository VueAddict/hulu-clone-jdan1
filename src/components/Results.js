import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import requests from "../api/requests";
import FlipMove from "react-flip-move";

import "../styles/Results.css";
import VideoCard from "./VideoCard";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(selectedOption);
      setMovies(response.data.results);
    };
    fetchMovies();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies?.map((movie) => (
          <VideoCard movie={movie} key={movie.id} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;

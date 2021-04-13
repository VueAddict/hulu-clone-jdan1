import React, { forwardRef } from "react";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";

import "../styles/VideoCard.css";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div className="videoCard" ref={ref}>
      <img
        src={`${imageBaseUrl}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
        {movie.media_type && `${movie.original_name} `}
        <span>{movie.release_date || movie.first_air_date}</span>
        <span>
          <ThumbUpSharp />
        </span>
        <span>{movie.vote_count}</span>
      </p>
    </div>
  );
});
export default VideoCard;

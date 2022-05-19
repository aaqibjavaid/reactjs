import React from "react";

export const MovieList = (props) => { 
  const gettingMoviesList = props.movies.map((movie)=>{
    return(
<div>
      <div
        style={{
          width: "350px",
          height:"100px",
          boxShadow: "5px 10px 18px #888888",
          padding: "0% 5%",
          borderRadius: "5px",
          marginTop: "3%",
          borderBottom: "5px solid green",
        }}
      >
      <div style={{ display: "flex", marginTop: "5%" }}>
          <h5 style={{fontSize:"16px"}}>{movie.movieName}</h5>
          <span style={{ marginLeft: "60%", marginTop: "9%" }}>{movie.duration}</span>
        </div>
        <span style={{ marginRight: "70%"}}>{movie.rating}/100</span>
      </div>
    </div>
    )
  })
  return (
    <div>{gettingMoviesList}</div>
    
  );
};

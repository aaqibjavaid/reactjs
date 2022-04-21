import React from "react";

export const MovieList = () => {
  return (
    <>
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
      <div>
      <div style={{ display: "flex", marginTop: "5%" }}>
          <h5 style={{fontSize:"16px"}}>Movie Name</h5>
          <span style={{ marginLeft: "60%", marginTop: "9%" }}>52m</span>
        </div>
        <span style={{ marginRight: "70%"}}>12/100</span>
      </div>
       
      </div>
     
    </>
  );
};

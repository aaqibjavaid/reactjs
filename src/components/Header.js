import React from "react";
import { MovieForm } from "./MovieForm";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  return (
    <>
      <div
        style={{
          color: "green",
          backgroundColor: "#948C8C",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Favorite Movie Directory</h1>
      </div>
      <div style={{ display: "flex" }}>
        <MovieForm />
          <SearchBar />
      </div>
    </>
  );
};

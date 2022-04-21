import React from 'react'
import { MovieList } from './MovieList'

export const SearchBar = () => {
  return (
    <>
    <div  style={{
          marginTop: "5%",
          marginLeft: "10%",
        }}>
                  <div>
            <input
              style={{
                width: "250px",
                padding: "12px 20px",
                marginLeft: "auto",
                marginRight: "auto",
                display: "inline-block",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxSizing: "border-box",
              }}
              type="text"
              placeholder='Search for movie by name'
              id="duration"
            />
            <MovieList/>
          </div>
    </div>
    <div>
    
    </div>
    
    </>
  )
}

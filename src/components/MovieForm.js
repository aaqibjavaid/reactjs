import React, { Component } from 'react'

export class MovieForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       movieName:"",
       rating:"10",
       duration:""
    }
  }
  movieNameHandler=event=>{
    this.setState({
      movieName: event.target.value
    })
  }
  ratingHandler=event=>{
    this.setState({
      rating: event.target.value
    })
  }
  durationHandler=event=>{
    this.setState({
      duration: event.target.value
    })
  }
  submitData=event=>{
    event.preventDefault();
    if(this.state.movieName ==="" || this.state.rating ===""){
      alert("All fields are mandatory")
      return
    }
    this.props.movieHandler(this.state);
    this.setState({movieName: "", rating:"", duration:""})
    console.log(this.state)

  }
  render() {
    return (
      <>
      <div
        style={{
          padding: "50px",
          width: "400px",
          height: "380px",
          marginTop: "5%",
          marginLeft: "10%",
          boxShadow: "5px 10px 18px #888888",
          borderRadius: "10px",
        }}
      >
        <h1>Movie Form</h1>

        {/* Movie Name Field */}
        <div>
          <div>
            <label
              style={{
                display: "flex",
                margin: "5% 19% 2%",
              }}
              htmlFor="name"
            >
              Movie Name
            </label>
          </div>
          <div>
            <input value={this.state.movieName} onChange={this.movieNameHandler}
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
              id="name"
            />
          </div>
        </div>
        {/* Movie ratings     */}
        <div>
          <div>
            <label
              style={{
                display: "flex",
                margin: "5% 19% 2%",
              }}
              htmlFor="ratings"
            >
              Ratings
            </label>
          </div>
          <div>
            <input value={this.state.rating} onChange={this.ratingHandler}
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
              type="number"
              id="ratings"
            />
          </div>
        </div>
        {/* Movie Duration */}
        <div>
          <div>
            <label
              style={{
                display: "flex",
                margin: "5% 19% 2%",
              }}
              htmlFor="duration"
            >
              Duration
            </label>
          </div>
          <div>
            <input value={this.state.duration} onChange={this.durationHandler}
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
              type="number"
              placeholder="Movie Duration"
              id="duration"
            />
          </div>
        </div>
        {/* Add Movie Button */}
      
          <button onClick={this.submitData}
            style={{
              backgroundColor: "#4CAF50",
              width:"150px",
              border: "none",
              color: "white",
              padding: "14px 13px",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              margin: "7% 70%",
              cursor: "pointer",
              borderRadius:"5px"
            }}
          >Add Movie
          </button>
        
      </div>
    </>
    )
  }
}

export default MovieForm
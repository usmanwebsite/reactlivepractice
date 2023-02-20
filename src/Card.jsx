import React from "react";

function Card(props){
    return(
      <>
    <div className="card">
    <img src={props.imgsrc} className="card-img" alt="myPic"  />
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <h4 className="card-text">{props.content}</h4>
      <a href={props.link} className="primary">
      <button>Watch Now</button>
      </a>
    </div>
  </div>
  </>
    );
  }

  export default Card;
//jshint esversion: 8
import React from "react";

let Card = ({title, body, imgUrl})=> 
    (
        <div className="card">
        <h1>{title}</h1>
        <img className="cardImage" src={imgUrl} alt="card-img"/>
        <p> {body}</p>
         </div>
    );
export default Card;
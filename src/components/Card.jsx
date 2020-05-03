//jshint esversion: 8
import React, { useState } from "react";

let Card = ({title, body, imgUrl, maxText})=> {
    const [hidden, setHidden] = useState(true);
    let truncater = () => {
        if (body.length <= maxText) return <span>{body}</span>;
        else{
            return (
                <span>
                {hidden ? body.substr(0, maxText)+"... " : body}
                 {hidden ? (
                    <span className="show-text" onClick={()=>setHidden(false)} > Show more.</span>
                ): (
                    <span className="show-text" onClick={()=>setHidden(true)}> Show less.</span>
                )} 
                </span>

            );
        }
    }
    return (         
        <div className="card">
        <h1>{title}</h1>
        <img className="cardImage" src={imgUrl} alt="card-img"/>
        <p> {truncater()}</p>
        </div>
    );
}
export default Card;
//jshint esversion: 9
import React, {useState} from "react";

function Composer({placeholderText}) {
    function updateText(){

    }
    return (
            <input name="title"
                   value=""
                   onChange={updateText}
                   type="text"
                   placeholder={placeholderText} />
    );
}
export default Composer;
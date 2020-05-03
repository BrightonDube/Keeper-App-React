//jshint esversion: 9
import React, { useState } from "react";

function Composer({ onSubmitted }) {
    const [typedText, setTypedText] = useState({
        title: "",
        body: ""
    });   

    function updateText(event) {
        const {name, value} = event.target;        
        setTypedText({...typedText, [name]: value});
    }
    return (
        <div className="note-input">
            <input name="title"
                value={typedText.title}
                onChange={updateText}
                type="text"
                placeholder="Title" />
            <textarea name="body"
                value={typedText.body}
                onChange={updateText}
                rows="1"
                placeholder="Compose Note" />
            <button onClick={() => { onSubmitted(typedText, setTypedText) }}>Add</button>
        </div>

    );
}
export default Composer;
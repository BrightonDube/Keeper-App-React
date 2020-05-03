//jshint esversion:8
import React from "react";

import { Button } from "react-bootstrap";

// const Gate = ({isOpen}) => <p>{isOpen}</p>;
const Gate = () => {
    const [steps, setSteps] = React.useState(0);
    const increment = () => {
        setSteps(prevSteps => prevSteps + 1);
    };
    return (
    <div>
        <>
        <td>Hello</td>
        <td> " "   </td>
        <td>World</td>
        </>
        <p> I have taken {steps} steps today!</p>
        <Button className="btn btn-primary" onClick={increment}>Another step</Button>
    </div>)
};
export default Gate;
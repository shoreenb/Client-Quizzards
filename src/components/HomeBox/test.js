import React from "react";
import ReactDOM from 'react-dom';
import HomeBox from './../HomeBox/index';

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<HomeBox></HomeBox>, div)
})
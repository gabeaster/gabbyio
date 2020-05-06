import React, { useState } from "react";
import Capture from "./slideComponents/capture";
import Todo from "./slideComponents/todo";
import Tracker from "./slideComponents/cryptoTracker";
function Slider() {
  //add components to the array
  //array for component to show inside the slider
  let sliderArr = [<Capture />, <Todo />, <Tracker />];
  const [x, setX] = useState(0);
  console.log(x);
  const goBack = () => {
    setX(x + 100);
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goNext = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            <div className="projects-container">{item}</div>
          </div>
        );
      })}

      <button id="back-btn" className="slide-btn" onClick={goBack}>
        {/* <div className="selected-link A"></div>
        <div className="selected-link D"></div> */}
        <h3>Back</h3>
      </button>
      <button id="next-btn" className="slide-btn" onClick={goNext}>
        {/* <div className="selected-link B"></div>
        <div className="selected-link C"></div> */}
        <h3>Next</h3>
      </button>
    </div>
  );
}

export default Slider;

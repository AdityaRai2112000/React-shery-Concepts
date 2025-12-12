import React from "react";

const App = () => {
  function btnClicked() {
    console.log("button was clicked");
  }

  function mouseEnter() {
    console.log("mouse entered");
  }

  function inputChanging(val) {
    console.log(val);
  }

  return (
    <div>
      <h1>Functions in JavaScript</h1>
      <div className="div">
        <button onMouseEnter={mouseEnter} onDoubleClick={btnClicked}>
          Change text
        </button>

        <input
          onChange={function (elem) {
            inputChanging(elem.target.value);
          }}
          type="text"
          placeholder="enter the text"
        />
      </div>
      <div
        onMouseMove={(elem) => {
          console.log(elem.clientX, elem.clientY);
        }}
        className="box"
      ></div>
    </div>
  );
};

export default App;

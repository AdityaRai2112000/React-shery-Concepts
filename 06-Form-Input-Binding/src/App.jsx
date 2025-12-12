import React from "react";
import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    console.log(inputValue);
    setInputValue("");
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter the text"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;

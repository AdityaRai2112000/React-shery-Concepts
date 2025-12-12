import React from "react";
import axios from "axios";
import { useState } from "react";

// =========Local storage==============================

const App = () => {
  const users = {
    username: "Aditya",
    age: 25,
    city: "BLR",
  };

  const arr = [10, 20, 30];

  // localStorage.setItem("user", "Aditya");
  // localStorage.setItem("age", "25");
  // localStorage.setItem("users", JSON.stringify(users)); // store obj to local storage
  // localStorage.setItem("arr", JSON.stringify(arr));

  // const user = localStorage.getItem("user");
  // const age = localStorage.getItem("age");
  // const uservalue = JSON.parse(localStorage.getItem("users"));
  // const arrvalue = JSON.parse(localStorage.getItem("arr"));
  // //localStorage.removeItem("age");
  // //localStorage.clear();
  // console.log(user);
  // console.log(age);
  // console.log(uservalue);
  // console.log(uservalue.username);
  // console.log(arrvalue);
  // console.log(arrvalue[0]);

  //---------------------------------------------------------

  // ===========API calling===============================

  // Using fetch Methods

  async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  }

  // Using Axios Methods

  const getAxiosData = async () => {
    // {data} used to destucture the response to directly get data
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data);
  };

  const [data, setdata] = useState([]);

  const getImgData = async () => {
    // {data} used to destucture the response to directly get data
    const response = await axios.get("https://picsum.photos/v2/list");
    console.log(response.data);

    setdata(response.data);
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <button onClick={getAxiosData}>Get Axios Data</button>
      <button onClick={getImgData}>Get image Data</button>
      <div>
        {data.map(function (elem, idx) {
          return (
            <div>
              <h3>
                {idx + 1} {elem.author}
              </h3>
              <img src={elem.url} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

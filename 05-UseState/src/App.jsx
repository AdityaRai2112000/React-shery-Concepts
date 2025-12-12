import React from "react";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(10);
  const [username, setUsername] = useState("Adi");
  const [count, setCount] = useState(0);
  const [users, setusers] = useState({ user: "Aditya", age: 25, rank: 100 });
  const [arrnum, setArrnum] = useState([11, 22, 33]);

  function changeNum() {
    setNum(num + 1);
    // Batch updating
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);

    setUsername("John");
  }

  function incrCount() {
    setCount(count + 1);
  }
  function decrCount() {
    setCount(count - 1);
  }
  function resetCount() {
    setCount(0);
  }

  function updateUsers() {
    const newUsers = { ...users };
    const newarrnum = [...arrnum];
    newUsers.user = "Ram";
    newUsers.age = "34";
    newarrnum.push(44);
    setusers(newUsers);
    setArrnum(newarrnum);
    setusers((prev) => ({ ...prev, rank: 200 })); // another way of updating values
  }

  return (
    <div>
      <h3>
        The value is {num}, {username}
      </h3>
      <button onClick={changeNum}>click</button>
      <h1>{count}</h1>
      <button onClick={incrCount}>Increase</button>
      <button onClick={decrCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
      <h4 onClick={updateUsers}>
        {users.user}, {users.age}, {users.rank}, {arrnum}
      </h4>
    </div>
  );
};

export default App;

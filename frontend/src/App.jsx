import "./App.css";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState(null);

  function getUsers() {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((json) => setUsers(json));
    console.log(users);
  }

  return (
    <div className="App">
      <h1>Welcome to the Frontend!</h1>
      <button onClick={getUsers}>Click me!</button>
      {users && (
        <p>
          {users[0].name} {users[0].lastName}
        </p>
      )}
    </div>
  );
}

export default App;

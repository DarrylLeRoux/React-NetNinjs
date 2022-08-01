import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("mario");
  const [events, setEvents] = useState([
    { title: "Marios birthday bash", id: 1 },
    { title: "Bowers live stream", id: 2 },
    { title: "Race on moo moo farm", id: 3 },
  ]);

  const handleNameChange = () => {
    setName("luigi");
  };

  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={handleNameChange}>Change name</button>
      {/* Render the lists on the page */}
      {events.map((event) => (
        // Put a key print on a parent element
        <div key={event.id}>
          <h2>{event.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;

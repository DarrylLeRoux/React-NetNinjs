import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "Marios birthday bash", id: 1 },
    { title: "Bowers live stream", id: 2 },
    { title: "Race on moo moo farm", id: 3 },
  ]);

  const handleClick = (id) => {
    // Access previous estate
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  console.log(showEvents);

  return (
    <div className="App">
      {showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(false);
            }}
          >
            Hide Event
          </button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {/* Render the lists on the page */}
      {showEvents &&
        events.map((event) => (
          // Put a key print on a parent element
          <div key={event.id}>
            <h2>{event.title}</h2>
            <button
              onClick={() => {
                handleClick(event.id);
              }}
            >
              Delete Event
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;

import { useState } from "react";
import { supabase } from "../supabase";

function EventCard(props) {
  return (
    <div className="event-card">

      <h2>{props.event_name}</h2>

      <p>📍 {props.venue}</p>

      <p>📅 {props.date}</p>

      <p>{props.description}</p>

    </div>
  );
}

function Events() {

  const [events, setEvents] = useState([]);

  async function getEvents() {

    const { data, error } = await supabase
      .from("events")
      .select("*");

    if (error) {
      console.error(error);
      alert("Failed to retrieve events");
      return;
    }

    setEvents(data);
  }

  return (
    <main className="events-page">

      <h1>Upcoming College Events</h1>

      <button className="events-button" onClick={getEvents}>
        View Events
      </button>

      <div className="events-grid">

        {events.map((event) => (

          <EventCard
            key={event.id}
            event_name={event.event_name}
            venue={event.venue}
            date={event.date}
            description={event.description}
          />

        ))}

      </div>

    </main>
  );
}

export default Events;
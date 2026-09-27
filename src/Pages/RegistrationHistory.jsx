import { useState } from "react";
import { supabase } from "../supabase";

function RegistrationHistory() {

  const [registrations, setRegistrations] = useState([]);

  async function getRegistrations() {

    const { data, error } = await supabase
      .from("registrations")
      .select("*");

    if (error) {
      console.error(error);
      alert("Failed to retrieve registrations");
      return;
    }

    setRegistrations(data);
  }

  return (
    <main className="history-page">

      <h1>Registration History</h1>

      <button className="history-button" onClick={getRegistrations}>
        View Registrations
      </button>

      <div className="history-table-wrapper">

        <table className="history-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Event</th>
            </tr>
          </thead>

          <tbody>

            {registrations.map((registration) => (

              <tr key={registration.id}>

                <td>{registration.name}</td>
                <td>{registration.email}</td>
                <td>{registration.event}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}

export default RegistrationHistory;
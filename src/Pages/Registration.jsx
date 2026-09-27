import { useState } from "react";
import { supabase } from "../supabase";

function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [event, setEvent] = useState("");

    async function handleRegistration() {

        if (!name || !email || !event) {
            alert("Please fill all the details");
            return;
        }

        const { data, error } = await supabase
            .from("registrations")
            .insert([
            {
                name: name,
                email: email,
                event: event
            }
            ]);

        if (error) {
            console.error(error);
            alert("Registration failed");
            return;
        }

        alert("Registration successful!");
    }

    return (
        <main className="registration-page">

            <h1>Register for Event</h1>

            <div className="registration-form">

                <label htmlFor="name">Name</label>

                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />

                <label htmlFor="email">Email</label>

                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />

                <label htmlFor="event">Select Event</label>

                <select
                    id="event"
                    value={event}
                    onChange={(e) => setEvent(e.target.value)}
                >
                    <option value="">-- Select Event --</option>
                    <option value="Cultural Fest">Cultural Fest</option>
                    <option value="Technical Fest">Technical Fest</option>
                </select>

            </div>

            <section className="registration-details">

                <h3>Registration Details</h3>

                <p>Name: <strong>{name || "-"}</strong></p>
                <p>Email: <strong>{email || "-"}</strong></p>
                <p>Event: <strong>{event || "-"}</strong></p>

            </section>

            <button onClick={handleRegistration}>
                Register
            </button>

        </main>
    );
}

export default Registration;
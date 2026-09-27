import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Registration from "./Pages/Registration";
import RegistrationHistory from "./Pages/RegistrationHistory";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/history" element={<RegistrationHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
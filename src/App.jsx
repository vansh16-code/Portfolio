// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Developer from "./pages/Developer";
import Recruiter from "./pages/Recruiter";
import Adventurer from "./pages/Adventurer";
import Stalker from "./pages/Stalker";
import Intro from "./pages/Intro";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/adventurer" element={<Adventurer />} />
        <Route path="/stalker" element={<Stalker />} />
      </Routes>
    </Router>
  );
}

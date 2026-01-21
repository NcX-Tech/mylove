import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Player from "./Player";
import Nos from "./Nos";
import Futuro from "./Futuro";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player" element={<Player />} />
          <Route path="/nos" element={<Nos />} />
          <Route path="/futuro" element={<Futuro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

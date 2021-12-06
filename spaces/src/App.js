import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Galeria from "./Galeria";
import Rooms from "./Rooms";

function App() {
  
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Galeria />} />
          <Route path="/rooms/:homeid" element={<Rooms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

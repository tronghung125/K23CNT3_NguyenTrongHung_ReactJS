import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NthNavBar from "./nth_components/NthNavBar";
import NthHome from "./nth_components/NthHome";
import NthListEvent from "./nth_components/NthListEvent";
import NthFormEventAdd from "./nth_components/NthFormEventAdd";

const App = () => {
  return (
    <Router>
      <NthNavBar />
      <Routes>
        <Route path="/" element={<NthHome />} />
        <Route path="/nth-event" element={<NthListEvent />} />
        <Route path="/nth-event-add" element={<NthFormEventAdd />} />
      </Routes>
    </Router>
  );
};

export default App;

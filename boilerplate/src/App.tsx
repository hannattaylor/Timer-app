// import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Header from "./Components/Header";
import { Timer } from "./Components/Timer";
import { Timer2 } from "./Components/Timer2";
import Analog from "./Pages/Analog";
import Loading from "./Components/Loading";
import Visuel from "./Pages/Visuell";
import Digital from "./Pages/Digital";

export function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/"></Route>
          <Route path="/analog"></Route>
          <Route path="/digital"></Route>
          <Route path="/visuell"></Route>
        </Routes>
        <Loading />
      </BrowserRouter>
    </main>
  );
}

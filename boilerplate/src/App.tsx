// import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import { Timer } from "./Components/Timer";
import Analog from "./Pages/Analog";

export function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/analog" element={<Analog />}></Route>
          {/* <Route path="/digital" element={< />}></Route>
          <Route path="/visuell" element={< />}></Route> */}
        </Routes>
        <Timer />
      </BrowserRouter>
    </main>
  );
}

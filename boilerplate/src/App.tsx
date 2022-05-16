// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analog from "./Pages/Analog";
import Loading from "./Components/Loading";
import Visuel from "./Pages/Visuell";
import Digital from "./Pages/Digital";

export function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/analog" element={<Analog />}></Route>
          <Route path="/digital" element={<Digital />}></Route>
          <Route path="/visuell" element={<Visuel />}></Route>
        </Routes>
        <Loading />
      </BrowserRouter>
    </main>
  );
}

// import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import { Timer } from "./Components/Timer";
import { Timer2 } from "./Components/Timer2";
import Analog from "./Pages/Analog";
import { createContext } from "react";
import { useState } from "react";
import useTimer from "easytimer-react-hook";
import Loading from "./Components/Loading";

export function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/analog"></Route>
          {/* <Route path="/digital" element={< />}></Route>
          <Route path="/visuell" element={< />}></Route> */}
        </Routes>
        <Loading />
      </BrowserRouter>
    </main>
  );
}

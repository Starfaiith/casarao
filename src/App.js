
//css

import './App.css';

//pages
import Acervo from "./pages/acervo"
import Home from "./pages/home"

//react
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/acervo" element={<Acervo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


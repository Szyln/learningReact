// 整個頁面，包含共通區塊
import React, { useState } from "react";
import Nav from "./component/Nav";
import HomePage from "./pages/Homepage";
import About from "./pages/About";
import Footer from "./component/Footer";
import { Routes, Route } from "react-router-dom";
import "./style/all.css"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

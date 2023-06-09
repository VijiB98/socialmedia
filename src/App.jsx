/** @format */
/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Wall from "./pages/wall";
import Friends from "./pages/friends";
import Friendschat from "./pages/chat";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Wall />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/friendschat" element={<Friendschat />} />
      </Routes>
    </>
  );
}

export default App;

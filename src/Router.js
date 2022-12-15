import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar2 } from "./Components/Header/Navbar2/Navbar2";
import { Home } from "./Page/Home/Home";
import { Navbar } from "./Components/Header/Navbar/Navbar";

export function Router() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar2 } from "./Components/Header/Navbar2/Navbar2";
import { Home } from "./Page/Home/Home";
import { Navbar } from "./Components/Header/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Product } from "./Page/Product/Product";

export function Router() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

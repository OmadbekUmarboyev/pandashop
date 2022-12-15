import React from "react";
import { Intro } from "../../Components/Intro/Intro";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { Data } from "./data/Data";

export function Home() {
  return (
    <>
      <div id="Home">
        <Intro />
        <section id="Sec1">
          <div id="font">
            <h1>Yangi Maxsulotlar</h1>
            <NavLink>Batafsil...</NavLink>
          </div>
          <Data />
        </section>
      </div>
    </>
  );
}

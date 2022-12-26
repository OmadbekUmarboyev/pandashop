import React from "react";
import { Intro } from "../../Components/Intro/Intro";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { Data } from "./data/Data";
import { Sec2 } from "./Sec2/Sec2";
import { Homiy } from "../../Components/Hpme Homiylar/Homiy";
import { Data2 } from "./data/Data2";
import { Massange } from "../../Components/Massange/Massange";

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
        <Homiy />
        <section id="Sec2">
          <div id="font">
            <h1>Eng mashxurlari</h1>
            <NavLink>Batafsil...</NavLink>
          </div>
          <Sec2 />
        </section>
        <Massange />
        <section id="Sec3">
          <div id="font">
            <h1>Chegirmalar</h1>
            <NavLink>Batafsil...</NavLink>
          </div>
          <Data2 />
        </section>
      </div>
    </>
  );
}

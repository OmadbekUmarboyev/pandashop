import React from "react";
import { Intro } from "../../Components/Intro/Intro";
import "./Home.css";
import dataImg1 from "./Assets/4IMG_20220507_175040_152 1.png";
import { NavLink } from "react-router-dom";
import { Data } from "./data/Data";

const data = [
  {
    nomi: "Koylak dvoyka",
    narxi: "120 000",
    img: dataImg1,
  },
  {
    nomi: "Koylak dvoyka",
    narxi: "120 000",
    img: dataImg1,
  },
  {
    nomi: "Koylak dvoyka",
    narxi: "120 000",
    img: dataImg1,
  },
  {
    nomi: "Koylak dvoyka",
    narxi: "120 000",
    img: dataImg1,
  },
  {
    nomi: "Koylak dvoyka",
    narxi: "120 000",
    img: dataImg1,
  },
  {
    nomi: "Koylak dvoyka",
    narxi: "120 000",
    img: dataImg1,
  },
];

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

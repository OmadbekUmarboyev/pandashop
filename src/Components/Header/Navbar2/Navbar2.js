import React from "react";
import "./Navbar2.css";
import { NavLink } from "react-router-dom";
import BootomIcon from "./Assets/chevron-down.png";

export function Navbar2() {
  return (
    <>
      <div id="Nav2">
        <NavLink id="Pwert">New</NavLink>
        <div className="drop-down-card">
          <NavLink id="BIGAGROPUP">
            Kiyimlar <img src={BootomIcon} alt="" />
          </NavLink>
          <div className="sub-menu">
            <NavLink>Erkaklar uchun</NavLink>
            <NavLink>Ayollar uchun</NavLink>
            <NavLink>Qizlar uchun</NavLink>
            <NavLink>Bolalar uchun</NavLink>
          </div>
        </div>
        <NavLink id="Pwert">Chegirmalar</NavLink>
        <div className="drop-down-card">
          <NavLink id="BIGAGROPUP">
            Ko’proq <img src={BootomIcon} alt="" />
          </NavLink>
          <div className="sub-menu">
            <NavLink>Mobil qurulmalar uchun</NavLink>
            <NavLink>Office uchun</NavLink>
            <NavLink>Avtomobillar uchun</NavLink>
            <NavLink>Xonadon uchun</NavLink>
          </div>
        </div>
        <NavLink id="Pwert">Xamkorlik</NavLink>
      </div>
    </>
  );
}

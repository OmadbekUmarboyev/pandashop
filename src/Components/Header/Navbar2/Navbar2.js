import React from "react";
import "./Navbar2.css";
import { NavLink } from "react-router-dom";
import BootomIcon from "./Assets/chevron-down.png";

export function Navbar2() {
  return (
    <>
      <div id="Nav2">
        <NavLink to="new" id="Pwert">
          New
        </NavLink>
        <div className="drop-down-card">
          <NavLink to="product" id="BIGAGROPUP">
            Kiyimlar <img src={BootomIcon} alt="" />
          </NavLink>
          <div className="sub-menu">
            <NavLink to="product/">Erkaklar uchun</NavLink>
            <NavLink to="product/">Ayollar uchun</NavLink>
            <NavLink to="product/">Qizlar uchun</NavLink>
            <NavLink to="product/">Bolalar uchun</NavLink>
            {/* <NavLink to="product/for_men">Erkaklar uchun</NavLink>
            <NavLink to="product/for_women">Ayollar uchun</NavLink>
            <NavLink to="product/for_girl">Qizlar uchun</NavLink>
            <NavLink to="product/for_boy">Bolalar uchun</NavLink> */}
          </div>
        </div>
        <NavLink to="chegirma" id="Pwert">
          Chegirmalar
        </NavLink>
        <div className="drop-down-card">
          <NavLink to="product1" id="BIGAGROPUP">
            Ko’proq <img src={BootomIcon} alt="" />
          </NavLink>
          <div className="sub-menu">
            <NavLink>Mobil qurulmalar uchun</NavLink>
            <NavLink>Office uchun</NavLink>
            <NavLink>Avtomobillar uchun</NavLink>
            <NavLink>Xonadon uchun</NavLink>
          </div>
        </div>
        <NavLink to="xamkorlik" id="Pwert">
          Xamkorlik
        </NavLink>
      </div>
    </>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import PandaShopICON from "./Ellipse 12.svg";
import "./Footer.css";

export function Footer() {
  return (
    <>
      <div id="Footer">
        <div id="Bolim1">
          <figure>
            <img src={PandaShopICON} alt="" />
          </figure>
          <div id="FontFooter">
            <h1>PandaShop.Uz</h1>
            <h2>Online savdo platformasi</h2>
            <p>
              Barcha xuquqlar ximoyalangan <br /> 2022 yil
            </p>
          </div>
        </div>
        <div id="Bolim2">
          <h1>Bo’limlar</h1>
          <NavLink id="AAdmin">Barcha maxsulotlar</NavLink>
          <NavLink id="AAdmin">Mening savatcham</NavLink>
          <NavLink id="AAdmin">Yangi maxsulotlar</NavLink>
          <NavLink id="AAdmin">Eng mashxurlari</NavLink>
        </div>
        <div id="Bolim2">
          <h1 style={{ width: "211px" }}>Biz xaqimizda</h1>
          <NavLink id="AAdmin">Biz bilan aloqa</NavLink>
          <NavLink id="AAdmin">Xamkorlik</NavLink>
          <NavLink id="AAdmin">Yetkazib berish</NavLink>
          <NavLink id="AAdmin">Manzil</NavLink>
        </div>
        <div id="Bolim2">
          <h1>Admin</h1>
          <NavLink id="AAdmin" style={{ width: "211px" }}>Oybek Abdujabborov</NavLink>
          <NavLink id="AAdmin" style={{ width: "211px" }}>Shuxratbek Mo’xiddinov</NavLink>
          <NavLink id="AAdmin" style={{ width: "211px" }}>Nozimjon Olimjonov</NavLink>
          <NavLink id="AAdmin" style={{ width: "211px", color: "red" }}>
            www.axsi.uz
          </NavLink>
        </div>
      </div>
    </>
  );
}

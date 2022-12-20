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
          <NavLink>Barcha maxsulotlar</NavLink>
          <NavLink>Mening savatcham</NavLink>
          <NavLink>Yangi maxsulotlar</NavLink>
          <NavLink>Eng mashxurlari</NavLink>
        </div>
        <div id="Bolim2">
          <h1 style={{ width: "211px" }}>Biz xaqimizda</h1>
          <NavLink>Biz bilan aloqa</NavLink>
          <NavLink>Xamkorlik</NavLink>
          <NavLink>Yetkazib berish</NavLink>
          <NavLink>Manzil</NavLink>
        </div>
        <div id="Bolim2">
          <h1>Admin</h1>
          <NavLink style={{ width: "211px" }}>Oybek Abdujabborov</NavLink>
          <NavLink style={{ width: "211px" }}>Shuxratbek Mo’xiddinov</NavLink>
          <NavLink style={{ width: "211px" }}>Nozimjon Olimjonov</NavLink>
          <NavLink style={{ width: "211px", color: "red" }}>
            www.axsi.uz
          </NavLink>
        </div>
      </div>
    </>
  );
}

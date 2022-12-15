import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import SearchIcon from "./Assets/search.svg";
import ShopIcon from "./Assets/shopping-basket.svg";
import USERICON from "./Assets/user.svg";

export function Navbar() {
  return (
    <nav id="Nav">
      <div id="left">
        <NavLink to="/">PandaShop</NavLink>
      </div>
      <div id="medium">
        <NavLink to="/">Delivery</NavLink>
        <NavLink to="/">Aloqa</NavLink>
      </div>
      <div id="Right">
        <img src={SearchIcon} alt="" />
        <img src={ShopIcon} alt="" />
        <img src={USERICON} alt="" />
      </div>
    </nav>
  );
}

import React from "react";
import "./Product.css";
import FilterIcon from "./sliders-h-Regular.png";
import SearchIcon from "./search-Regular.png";
import { Data2 } from "./../Home/data/Data2";

export function Product() {
  return (
    <>
      <div id="Product">
        <div id="Filter">
          <button id="FilterBTN">
            <img src={FilterIcon} alt="" />
          </button>
          <label id="SearcProduct">
            <input type="text" name="" placeholder="Nima izlamoqdasiz ?" />
            <button id="SearchBtn">
              <img src={SearchIcon} alt="" />
            </button>
          </label>
        </div>
        <div id="Products">
          <div>
            <Data2 />
          </div>
        </div>
      </div>
    </>
  );
}

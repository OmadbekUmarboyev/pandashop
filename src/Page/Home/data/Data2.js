import React from "react";

import "../Home.css";
import dataImg1 from "../Assets/4IMG_20220507_175040_152 1.png";
const data = [
  {
    chegirma: "15%",
    nomi: "Koylak dvoyka",
    narxi: "120 000",
    img: dataImg1,
  },
  {
    chegirma: "15%",
    nomi: "Koylak dvoyka",
    narxi: "120 000",
    img: dataImg1,
  },
  {
    chegirma: "15%",
    nomi: "Koylak dvoyka",
    narxi: "120 000",
    img: dataImg1,
  },
  {
    chegirma: "15%",
    nomi: "Koylak dvoyka",
    narxi: "120 000",
    img: dataImg1,
  },
  {
    chegirma: "15%",
    nomi: "Koylak dvoyka",
    narxi: "120 000",
    img: dataImg1,
  },
  {
    chegirma: "15%",
    nomi: "Koylak dvoyka",
    narxi: "120 000",
    img: dataImg1,
  },
];
export function Data2() {
  return (
    <div id="BigData">
      {data.map((item, index) => {
        return (
          <>
            <div key={index} id="dataMap">
              <figure>
                <span id="Chegirma">{item.chegirma}</span>
                <img src={item.img} alt="" />
              </figure>
              <h1 id="PRname">{item.nomi}</h1>
              <p id="PRprice">{item.narxi} sum</p>
            </div>
          </>
        );
      })}
    </div>
  );
}

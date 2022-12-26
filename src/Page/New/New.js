import React from "react";
import "./New.css";
import Img1 from "./d1 1.png";
import { Massange } from "./../../Components/Massange/Massange";

const NewData = [
  {
    Img: Img1,
    time: "02/11/2022 00:59",
  },
  {
    Img: Img1,
    time: "02/11/2022 00:59",
  },
  {
    Img: Img1,
    time: "02/11/2022 00:59",
  },
  {
    Img: Img1,
    time: "02/11/2022 00:59",
  },
  {
    Img: Img1,
    time: "02/11/2022 00:59",
  },
  {
    Img: Img1,
    time: "02/11/2022 00:59",
  },
];

export function New() {
  return (
    <>
      <div id="New">
        <h1 id="NewH1">Buyurtmalar yetib keldi </h1>
        <div id="NewData">
          {NewData.map((item, index) => {
            return (
              <>
                <div id="MapNew" key={index}>
                  <figure>
                    <img id="ImgNewPr" src={item.Img} alt="" />
                    <p id="PNewpr">{item.time}</p>
                  </figure>
                </div>
              </>
            );
          })}
        </div>
        <div>
          <Massange />
        </div>
      </div>
    </>
  );
}

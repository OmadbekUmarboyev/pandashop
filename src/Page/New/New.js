import React from "react";
import "./New.css";
import Img1 from "./d1 1.png";
import { PatternFormat } from "react-number-format";

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
                    <img src={item.Img} alt="" />
                  </figure>
                </div>
              </>
            );
          })}
        </div>
        <div>
          <div id="Habar">
            <h1 id="MaH1">Xabar qoldirish</h1>
            <div id="Comment">
              <input id="Lorem1" type="text" />
              <div id="Light">
                <input
                  id="LightLeft11"
                  type=""
                  name=""
                  placeholder="Ismingiz"
                />
                <PatternFormat
                  format="+99 8(##) ### ###"
                  allowEmptyFormatting
                  mask="_"
                  id="NumFor"
                />

                <button id="SubBtn">Xabarni Jo`natish</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

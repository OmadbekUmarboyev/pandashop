import React from "react";
import "./Massange.css";
import { PatternFormat } from "react-number-format";

export function Massange() {
  return (
    <>
      <div id="Massange">
        <h1 id="MaH1">Xabar qoldirish</h1>
        <div id="Comment">
          <input id="Lorem" type="text" />
          <div id="Light">
            <input id="LightLeft11" type="" name="" placeholder="Ismingiz" />
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
    </>
  );
}

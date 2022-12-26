import React from "react";
import "./Massange.css";
import { PatternFormat } from "react-number-format";

export function Massange() {
  return (
    <>
      <div id="Habar">
        <textarea
          id="Lorem2"
          type="text"
          placeholder="Xabar qoldiring biz siz bilan bog’lanamiz"
        />
        <div id="Right11">
          <input id="PhoneIn" type="" name="" placeholder="Ismingiz" />
          <PatternFormat
            format="+99 8(##) ### ###"
            allowEmptyFormatting
            mask="_"
            id="NumFor2"
          />

          <button id="SubBtn">Xabarni Jo`natish</button>
        </div>
      </div>
    </>
  );
}

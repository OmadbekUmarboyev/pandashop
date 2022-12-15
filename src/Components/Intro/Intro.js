import React from "react";
import "./Intro.css";
import Slider from "react-slick";
import IntroPNG from "./Assets/Без bg.png";

export function Intro() {
  var settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    cssEase: "linear",
  };
  return (
    <div id="Intro">
      <Slider {...settings}>
        <figure id="FigureIntro1">
          <img src={IntroPNG} alt="" />
        </figure>
        <figure id="FigureIntro1">
          <img src={IntroPNG} alt="" />
        </figure>
        <figure id="FigureIntro1">
          <img src={IntroPNG} alt="" />
        </figure>
        <figure id="FigureIntro1">
          <img src={IntroPNG} alt="" />
        </figure>
      </Slider>
    </div>
  );
}

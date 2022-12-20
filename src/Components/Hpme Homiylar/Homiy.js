import React from "react";
import Slider from "react-slick";
import IntroPNG from "./Ellipse 6.png";
import "./Homiy.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

export function Homiy() {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div id="Homiy">
      <h1 id="BZH1">Bizning Xomiylar</h1>
      <div id="HomiySlider">
        <Slider {...settings}>
          <figure id="FigureIntro2">
            <img src={IntroPNG} alt="" />
          </figure>
          <figure id="FigureIntro2">
            <img src={IntroPNG} alt="" />
          </figure>
          <figure id="FigureIntro2">
            <img src={IntroPNG} alt="" />
          </figure>
          <figure id="FigureIntro2">
            <img src={IntroPNG} alt="" />
          </figure>
          <figure id="FigureIntro2">
            <img src={IntroPNG} alt="" />
          </figure>
          <figure id="FigureIntro2">
            <img src={IntroPNG} alt="" />
          </figure>
          <figure id="FigureIntro2">
            <img src={IntroPNG} alt="" />
          </figure>
        </Slider>
      </div>
    </div>
  );
}

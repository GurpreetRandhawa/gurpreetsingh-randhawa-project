import "./Hero.scss";
import { useEffect, useState } from "react";
import food from "../../assets/icons/image1.png";
import video from "../../assets/video/promo.mp4";
import img1 from "../../assets/icons/h1.png";
import img2 from "../../assets/icons/h2.png";
import img3 from "../../assets/icons/h3.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__side-img">
        <img className="hero__img" src={food} />
      </div>
      <div className="hero__video-features">
        <div className="hero__video-container">
          <video controls loop muted className="hero__video">
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="hero__features">
          <div className="hero__feature">
            <img src={img1} className="hero__feature-img" />
            <h3 className="hero__feature-title">100% Whole Wheat Rotis</h3>
          </div>
          <div className="hero__feature">
            <img src={img2} className="hero__feature-img" />
            <h3 className="hero__feature-title">Affordable Packages</h3>
          </div>
          <div className="hero__feature">
            <img src={img3} className="hero__feature-img" />
            <h3 className="hero__feature-title">No Dish Repeat in a Week</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

import "./Main.scss";
import iconA from "../../assets/icons/IconA.gif";
import iconB from "../../assets/icons/IconB.gif";
import iconC from "../../assets/icons/IconC.gif";
import iconD from "../../assets/icons/IconD.gif";
import iconE from "../../assets/icons/icone.jpg";
import { useEffect, useState } from "react";

export default function Main() {
  return (
    <section className="main">
      <div className="main__work">
        <div className="main__work-title">How it Works</div>
        <div className="main__work-container">
          <div className="main__anim main__primary">
            <div className="main__work-holder">
              <div className="main__gif-holder">
                <img className="main__gif" src={iconA}></img>
              </div>
              <h3 className="main__gif-title">CHOOSE YOUR MEAL PLAN</h3>
              <p className="main__gif-details">
                3 Different Exotic Meal Plans.
              </p>
            </div>
            <div className="main__work-holder">
              <div className="main__gif-holder">
                <img className="main__gif" src={iconB}></img>
              </div>
              <h3 className="main__gif-title">SELECT YOUR MENU.</h3>
              <p className="main__gif-details">
                Different Dishes Options Everyday.
              </p>
            </div>
            <div className="main__work-holder">
              <div className="main__gif-holder">
                <img className="main__gif" src={iconC}></img>
              </div>
              <h3 className="main__gif-title">WE COOK</h3>
              <p className="main__gif-details">Freshly Cooked.</p>
            </div>
            <div className="main__work-holder">
              <div className="main__gif-holder">
                <img className="main__gif" src={iconD}></img>
              </div>
              <h3 className="main__gif-title">ENJOY DOORSTEP DELIVERY</h3>
              <p className="main__gif-details">
                Enjoy Fresh Food At Your Doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main__location">
        <div className="main__location-title">Our Delivery Coverage</div>
        <h3 className="main__subtitle">Now Serving</h3>
        <p className="main__cities">
          <span className="main__city">• Vancouver</span>
          <span className="main__city">• West Vancouver</span>
          <span className="main__city">• North Vancouver</span>
          <span className="main__city">• Richmond</span>
          <span className="main__city">• Burnaby</span>
          <span className="main__city">• Surrey</span>
        </p>
        <p className="main__cities">
          <span className="main__city">• White Rock</span>
          <span className="main__city">• New Westminster</span>
          <span className="main__city">• Coquitlam</span>
          <span className="main__city">• UBC</span>
          <span className="main__city">• Delta</span>
        </p>
        <p className="main__cities">
          <span className="main__city">• Abbotsford</span>
          <span className="main__city">• Port Coquitlam</span>
          <span className="main__city">• Langley</span>
          <span className="main__city">• Maple Ridge</span>
          <span className="main__city">• Port Moody</span>
        </p>
        <div className="main__city-img">
          <img className="main__cit-image" src={iconE}></img>
        </div>
      </div>
    </section>
  );
}

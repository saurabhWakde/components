import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import LeftBanner from "./assets/LeftBanner.jpg";
import Client1 from "./assets/clients/1.jpg";
import Client2 from "./assets/clients/2.jpg";
import Client3 from "./assets/clients/3.jpg";
import Client4 from "./assets/clients/4.jpg";
import Lamp from './assets/lamp.png'
import RightBanner from './assets/RightBanner.jpg'
import './assets/css/HomePage.css'
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="banner-container">
      <div className="left-banner">
        <img src={LeftBanner} alt="LeftBanner" />
      </div>
      <div className="content-container">
        <div className="header-section">
          <div className="heading">
            <h1>Your space </h1>
            <h1>Your style</h1>
          </div>
          <div className="clients-section">
            <div className="clients-images">
              <div className="client-image">
                <img src={Client1} alt="Client1" />
              </div>
              <div className="client-image">
                <img src={Client2} alt="Client2" />
              </div>
              <div className="client-image">
                <img src={Client3} alt="Client3" />
              </div>
              <div className="client-image">
                <img src={Client4} alt="Client4" />
              </div>
            </div>
            <div className="clients-info">
              <span>67k</span>clients globally
            </div>
          </div>
          <div className="description-section">
            <div className="description-text">
              <p>
                We excel in innovation and problem-solving, transforming
                challenges into boundless possibilities.
              </p>
            </div>
            <div className="description-button">
            
              <Link><IoIosArrowRoundForward className="arrow-icon" /></Link>
             
            </div>
          </div>
        </div>
        <div className="footer-section">
          <div className="contact-info">
            <p>Ready to bring your vision to life?</p>
            <img src={Lamp} alt="Lamp" />
            <p>
              +131 <span>5610</span> 7540
            </p>
          </div>
          <div className="project-info">
            <div className="card">
              <p>622k</p>
              <p>Accomplished Projects</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-banner">
        <img src={RightBanner} alt="RightBanner" />
      </div>
    </div>
  );
};

export default Homepage;

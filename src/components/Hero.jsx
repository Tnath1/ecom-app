import React from "react";
import { MdLocalPhone } from "react-icons/md";
import { LuMail } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import "./css/Hero.css";

const Hero = () => {
  return (
    <>
      <div className="wrapper">
      
        <div className="nav-container">
          <div className="nav-inner-flex">
            <div className="icon-container1">
              <MdLocalPhone />
              <p>(225) 555-0118</p>
            </div>
            <div className="icon-container1">
              <LuMail />
              <p>michelle.rivera@example.com</p>
            </div>
          </div>
          <p>Follow us and get a chance to win 80% off</p>
          <div>
            <div className="icon-container">
              <p>Follow us :</p>
              <FaInstagram /> <AiOutlineYoutube /> <FaFacebook />{" "}
              <IoLogoTwitter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

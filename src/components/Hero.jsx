import React from "react";
import { MdLocalPhone } from "react-icons/md";
import { LuMail } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { BsCartDash } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import "./css/Hero.css";
import BestSellerHeading from "./BestSellerHeading";

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
      <nav>
        <div className="main-nav-container">
          <div className="logo-wrapper">
            <h1 className="Logo">Bandage</h1>
            <div className="list-container">
              <ul>
                <li>Home</li>
                <li>
                  <div className="shop-container">
                    <p>Shop</p>
                    <MdOutlineKeyboardArrowDown />
                  </div>
                </li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Pages</li>
              </ul>
            </div>
          </div>
          <div className=" container-icon">
            <div className="login-icon">
              <FaRegUser />
              <p>Login / Logout</p>
            </div>
            <div className="search-container">
              <BsSearch />
              <div className="cart-icon">
                <BsCartDash />
                <p>1</p>
              </div>
              <div className="hrt-icon">
                <IoMdHeartEmpty />
                <p>1</p>
              </div>
            </div>
            <div className="Handmenu">
              <BiMenuAltRight />
            </div>
          </div>
        </div>
      </nav>
      <div className="herro">
        <div className="grid-container">
          <div className="item item1">
            <p>5 Items</p>
            <h2>Furniture</h2>
            <a href="#">Read More</a>
          </div>
          <div className="item item2">
            <p>5 Items</p>
            <h4>Furniture</h4>
            <a href="#">Read More</a>
          </div>
          <div className="item item3">
            <p>5 Items</p>
            <h4>Furniture</h4>
            <a href="#">Read More</a>
          </div>
          <div className="item item4">
            <p>5 Items</p>
            <h4>Furniture</h4>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <BestSellerHeading />
    </>
  );
};

export default Hero;

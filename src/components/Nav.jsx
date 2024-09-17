import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
import "./css/nav.css";
import SignInLogin from "../components/SignInLogin";

const Nav = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const location = useLocation();

  useEffect(() => {
    setNavVisible(false);
  }, [location]);

  return (
    <div>
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
              <FaInstagram /> <AiOutlineYoutube /> <FaFacebook />
              <IoLogoTwitter />
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="main-nav-container">
          <div className="logo-wrapper">
            <h1 className="Logo">Bandage</h1>
            <div className={`list-container ${navVisible ? "visible" : ""}`}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/product/:id">
                    <div className="shop-container">
                      <p>Shop</p>
                      <MdOutlineKeyboardArrowDown />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
                <li>
                  <Link>Pages</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container-icon">
            <div className="login-icon">
              <FaRegUser />
              <p onClick={openModal}>Login</p>
            </div>
            <div className="search-container">
              <BsSearch />
              <Link to="/cart">
                <div className="cart-icon">
                  <BsCartDash />
                  <p>0</p>
                </div>
              </Link>
              <div className="hrt-icon">
                <IoMdHeartEmpty />
                <p>1</p>
              </div>
            </div>
            <div className="Handmenu">
              <div className="search-flex">
                <div>
                  <BsSearch />
                </div>

                <div>
                  <BsCartDash />
                </div>
              </div>
              <BiMenuAltRight onClick={toggleNav} />
            </div>
          </div>
          <SignInLogin isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </nav>
    </div>
  );
};

export default Nav;

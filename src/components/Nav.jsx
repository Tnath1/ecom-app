import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
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
  const cartCount = useSelector((state) => state.cart.items.length);
  const likedCount = useSelector((state) => state.liked.items.length);
  const isShopActive =
    location.pathname === "/shop" || location.pathname.startsWith("/product/");

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
            <Link to="/" className="logo-link">
              <h1 className="Logo">Bandage</h1>
            </Link>
            <div className={`list-container ${navVisible ? "visible" : ""}`}>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      `nav-link${isActive ? " active-link" : ""}`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/shop"
                    className={`nav-link${isShopActive ? " active-link" : ""}`}
                  >
                    <div className="shop-container">
                      <p>Shop</p>
                      <MdOutlineKeyboardArrowDown />
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `nav-link${isActive ? " active-link" : ""}`
                    }
                  >
                    About
                  </NavLink>
                </li>
                {/* <li>
                  <Link>Blog</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
                <li>
                  <Link>Pages</Link>
                </li> */}
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
                  <p>{cartCount}</p>
                </div>
              </Link>
              <Link to="/loved">
                <div className="hrt-icon">
                  <IoMdHeartEmpty />
                  <p>{likedCount}</p>
                </div>
              </Link>
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

import { NavLink } from "react-router-dom";
import "./navbar.css";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  return (
    <header className="header ">
      <div className="container">
        <div className="logo">
          <h1>Dsports365</h1>
        </div>
        <nav>
          <NavLink
            to={"/"}
            className={({ isActive }) => isActive && "nav-active"}
          >
            নিউজ
          </NavLink>

          <div className="dropdown cricket-dropdown">
            <NavLink
              to={"/cricket"}
              className={({ isActive }) =>
                `nav-cricket ${isActive && "nav-active"}`
              }
            >
              ক্রিকেট <IoIosArrowDown />
            </NavLink>

            <div className={`nav-dropdown cricket-dropdown-content`}>
              <div className="subcategories">
                <NavLink to={"/football"}>আন্তর্জাতিক </NavLink>
                <NavLink to={"/football"}>জাতীয় </NavLink>
              </div>
              <div className="suggested-news"></div>
            </div>
          </div>

          <div className="dropdown football-dropdown">
            <NavLink
              to={"/football"}
              className={({ isActive }) =>
                `nav-cricket ${isActive && "nav-active"}`
              }
            >
              ফুটবল <IoIosArrowDown />
            </NavLink>

            <div className={`nav-dropdown football-dropdown-content`}>
              <div className="subcategories">
                <NavLink to={"/football"}>আন্তর্জাতিক </NavLink>
                <NavLink to={"/football"}>জাতীয় </NavLink>
              </div>
              <div className="suggested-news"></div>
            </div>
          </div>

          <div className="dropdown other-sports-dropdown">
            <NavLink
              to={"/other-sports"}
              className={({ isActive }) =>
                `nav-cricket ${isActive && "nav-active"}`
              }
            >
              আরও খেলা <IoIosArrowDown />
            </NavLink>

            <div className={`nav-dropdown other-sports-dropdown-content`}>
              <div className="subcategories">
                <NavLink to={"/football"}>টেনিস </NavLink>
                <NavLink to={"/football"}>অ্যাথলেটিক্স </NavLink>
                <NavLink to={"/football"}>অন্যান্য </NavLink>
              </div>
              <div className="suggested-news"></div>
            </div>
          </div>

          <NavLink
            to={"/editorial"}
            className={({ isActive }) => isActive && "nav-active"}
          >
            এডিটোরিয়াল
          </NavLink>
          <NavLink
            to={"/interview"}
            className={({ isActive }) => isActive && "nav-active"}
          >
            সাক্ষাৎকার
          </NavLink>
          <IoSearch />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

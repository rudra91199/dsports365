import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import CricketDropdown from "./CricketDropdown";
import FootballDropdown from "./FootballDropdown";
import OtherSportsDropdown from "./OtherSportsDropdown";
import Search from "./Search";
import logoLight from "../../../assets/images/Logo/Dsports-dark-01.png"

const Navbar = () => {
  const navigate= useNavigate()
  return (
    <header className="header ">
      <div className="container">
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logoLight} alt="" />
        </div>
        <nav>
          <NavLink            to={"/"}

            className={({ isActive }) => isActive && "nav-active"}
          >
            নিউজ
          </NavLink>

          <CricketDropdown />

          <FootballDropdown />

          <OtherSportsDropdown />

          <NavLink            to={"/all-sports-posts"}

            className={({ isActive }) => isActive && "nav-active"}
          >
            এডিটোরিয়াল
          </NavLink>
          <NavLink            to={"/all-sports-posts"}

            className={({ isActive }) => isActive && "nav-active"}
          >
            সাক্ষাৎকার
          </NavLink>
          <Search/>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

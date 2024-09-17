import { NavLink } from "react-router-dom";
import "./navbar.css";
import CricketDropdown from "./CricketDropdown";
import FootballDropdown from "./FootballDropdown";
import OtherSportsDropdown from "./OtherSportsDropdown";
import Search from "./Search";

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

          <CricketDropdown />

          <FootballDropdown />

          <OtherSportsDropdown />

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
          <Search/>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

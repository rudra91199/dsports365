import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const FootballDropdown = () => {
  return (
    <div className="dropdown football-dropdown">
      <NavLink
        to={"/football"}
        className={({ isActive }) => `nav-cricket ${isActive && "nav-active"}`}
      >
        ফুটবল <IoIosArrowDown />
      </NavLink>

      <div className={`nav-dropdown football-dropdown-content`}>
        <div className="subcategories">
          <NavLink to={"/football"}>আন্তর্জাতিক </NavLink>
          <NavLink to={"/football"}>জাতীয় </NavLink>
        </div>
        <div className="suggested-news">
        <div className="news">
            <img
              src="https://khela71.com/wp-content/uploads/2024/09/Mehidy-Hasan-Miraz-Khela71-1.jpg"
              alt=""
            />
            <div className="news-content">
              <Link>মেহেদী হাসান মিরাজ, দ্য রাইজ অব অ্যান অলরাউন্ডার</Link>
              <p>September 09, 2024</p>
            </div>
          </div>
          <div className="news">
            <img
              src="https://khela71.com/wp-content/uploads/2024/09/Littton-Century-138-khela71.jpg"
              alt=""
            />
            <div className="news-content">
              <Link>লিটন ফিচারিং দ্য ভিঞ্চি কোড</Link>
              <p>September 09, 2024</p>
            </div>
          </div>
          <div className="news">
            <img
              src="https://khela71.com/wp-content/uploads/2024/09/rishad-hossain-khela71-2.jpg"
              alt=""
            />
            <div className="news-content">
              <Link>কবজি জাদুর বাকবদল</Link>
              <p>September 09, 2024</p>
            </div>
          </div>
          <div className="news">
            <img
              src="https://khela71.com/wp-content/uploads/2024/09/Jisan-Alam-Khela71.jpg"
              alt=""
            />
            <div className="news-content">
              <Link>ভারতের বিপক্ষে দলে থাকবেন জিসান আলম?</Link>
              <p>September 09, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootballDropdown;

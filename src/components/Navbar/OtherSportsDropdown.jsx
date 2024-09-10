import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const OtherSportsDropdown = () => {
  return (
    <div className="dropdown other-sports-dropdown">
      <NavLink
        to={"/other-sports"}
        className={({ isActive }) => `nav-cricket ${isActive && "nav-active"}`}
      >
        আরও খেলা <IoIosArrowDown />
      </NavLink>

      <div className={`nav-dropdown other-sports-dropdown-content`}>
        <div className="subcategories">
          <NavLink to={"/football"}>টেনিস </NavLink>
          <NavLink to={"/football"}>অ্যাথলেটিক্স </NavLink>
          <NavLink to={"/football"}>অন্যান্য </NavLink>
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

export default OtherSportsDropdown;

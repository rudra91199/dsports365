import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import moment from "moment";

const FootballDropdown = () => {
  const [cricketNav, setCricketNav] = useState("");
  const [page, setPage] = useState(0);

  const { data: { result, count } = {}, isLoading } = useFetch(
    `/posts/allNews?category=${"ফুটবল"}&subcategory=${cricketNav}&page=${page}&limit=${4}`,
    ["footballNavNews", cricketNav, page]
  );

  const handleCatPage = (cat) => {
    setCricketNav(cat);
    setPage(0);
  };

  return (
    <div className="dropdown football-dropdown">
      <NavLink
        to={"/all-sports/ফুটবল"}

        className={({ isActive }) => `nav-cricket ${isActive && "nav-active"}`}
      >
        ফুটবল <IoIosArrowDown />
      </NavLink>

      <div className={`nav-dropdown football-dropdown-content`}>
        <div className="subcategories">
          <NavLink
            to={"/all-sports-posts"}
            onMouseOver={() => setCricketNav("")}
            className={`${cricketNav == "" && "hoveredCat"}`}
          >
            অল
          </NavLink>
          <NavLink
            to={"/all-sports-posts"}
            onMouseOver={() => setCricketNav("জাতীয়")}
            className={`${cricketNav == "জাতীয়" && "hoveredCat"}`}
          >
            জাতীয়
          </NavLink>
          <NavLink
            to={"/all-sports-posts"}
            onMouseOver={() => setCricketNav("আন্তর্জাতিক")}
            className={`${cricketNav == "আন্তর্জাতিক" && "hoveredCat"}`}
          >
            আন্তর্জাতিক
          </NavLink>
        </div>
        <div className="suggested-news">
          {result?.map((d) => (
            <div className="news">
              <div className="image-container">
                <img src={d?.image.url} alt="" />
                <span>{d.category}</span>
              </div>

              <div className="news-content">
                <h4>{d.title}</h4>
                <p>{moment(d?.createdAt).format("ll")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FootballDropdown;

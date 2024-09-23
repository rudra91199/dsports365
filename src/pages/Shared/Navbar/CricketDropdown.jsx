import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import moment from "moment";

const CricketDropdown = () => {
  const [cricketNav, setCricketNav] = useState("");
  const [page, setPage] = useState(0);

  const { data: { result, count } = {}, isLoading } = useFetch(
    `/posts/allNews?category=${"ক্রিকেট"}&subcategory=${cricketNav}&page=${page}&limit=${4}`,
    ["cricketNavNews", cricketNav, page]
  );

  const handleCatPage = (cat) => {
    setCricketNav(cat);
    setPage(0);
  };

  return (
    <div className="dropdown cricket-dropdown">
      <NavLink
        to={"/all-sports/ক্রিকেট"}
        className={({ isActive }) => `nav-cricket ${isActive && "nav-active"}`}
      >
        ক্রিকেট <IoIosArrowDown />
      </NavLink>

      <div className={`nav-dropdown cricket-dropdown-content`}>
        <div className="subcategories">
          <NavLink            to={"/all-sports/ক্রিকেট"}

            onMouseOver={() => setCricketNav("")}
            className={`${cricketNav == "" && "hoveredCat"}`}
          >
            অল{" "}
          </NavLink>
          <NavLink            to={`/all-sports/ক্রিকেট/জাতীয়`}

            onMouseOver={() => setCricketNav("জাতীয়")}
            className={`${cricketNav == "জাতীয়" && "hoveredCat"}`}
          >
            জাতীয়{" "}
          </NavLink>
          <NavLink            to={`/all-sports/ক্রিকেট/আন্তর্জাতিক`}

            onMouseOver={() => setCricketNav("আন্তর্জাতিক")}
            className={`${cricketNav == "আন্তর্জাতিক" && "hoveredCat"}`}
          >
            আন্তর্জাতিক{" "}
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

export default CricketDropdown;

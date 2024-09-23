import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import moment from "moment";

const OtherSportsDropdown = () => {
  const [cricketNav, setCricketNav] = useState("");
  const [page, setPage] = useState(0);

  const { data: { result, count } = {}, isLoading } = useFetch(
    `/posts/allNews?category=${"আরও খেলা"}&subcategory=${cricketNav}&page=${page}&limit=${4}`,
    ["othersNavNews", cricketNav, page]
  );
  return (
    <div className="dropdown other-sports-dropdown">
      <NavLink
                to={"/all-sports/আরও খেলা"}
        className={({ isActive }) => `nav-cricket ${isActive && "nav-active"}`}
      >
        আরও খেলা <IoIosArrowDown />
      </NavLink>

      <div className={`nav-dropdown other-sports-dropdown-content`}>
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
            onMouseOver={() => setCricketNav("টেনিস")}
            className={`${cricketNav == "টেনিস" && "hoveredCat"}`}
          >
            টেনিস
          </NavLink>
          <NavLink
            to={"/all-sports-posts"}
            onMouseOver={() => setCricketNav("অ্যাটলেটিক্স")}
            className={`${cricketNav == "অ্যাথলেটিক্স" && "hoveredCat"}`}
          >
            অ্যাথলেটিক্স
          </NavLink>
          <NavLink
            to={"/all-sports-posts"}
            onMouseOver={() => setCricketNav("অন্যান্য খেলা")}
            className={`${cricketNav == "অন্যান্য খেলা" && "hoveredCat"}`}
          >
            অন্যান্য
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

export default OtherSportsDropdown;

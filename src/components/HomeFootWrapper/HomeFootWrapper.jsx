import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import HomeFootPost from "../HomeFootPost/HomeFootPost";
import "./homeFootWrapper.css";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

const HomeFootWrapper = () => {
  const [cricketNav, setCricketNav] = useState("");
  const [page, setPage] = useState(0);

  const { data: { result, count } = {}, isLoading } = useFetch(
    `/posts/allNews?category=${"ফুটবল"}&subcategory=${cricketNav}&page=${page}&limit=${4}`,
    ["footballNews", cricketNav, page]
  );

  const handleCatPage = (cat) => {
    setCricketNav(cat);
    setPage(0);
  };

  return (
    <div className="homeFootWrapper homeWrapper">
      <div className="leftWrapper">
        <div className="homeCatNav">
          <p>ফুটবল</p>
          <p
            onClick={() => handleCatPage("")}
            className={`${cricketNav == "" && "selected"}`}
          >
            অল
          </p>
          <p
            onClick={() => handleCatPage("জাতীয়")}
            className={`${cricketNav == "জাতীয়" && "selected"}`}
          >
            জাতীয়
          </p>
          <p
            onClick={() => handleCatPage("আন্তর্জাতিক")}
            className={`${cricketNav == "আন্তর্জাতিক" && "selected"}`}
          >
            আন্তর্জাতিক
          </p>
        </div>

        <HomeFootPost news={result} />
        <button disabled={page == 0} onClick={() => setPage(page - 1)}>
          <IoIosArrowBack />
        </button>
        <button disabled={(page + 1 )* 4 >= count} onClick={() => setPage(page + 1)}>
          <IoIosArrowForward />
        </button>
      </div>

      <div className="rightWrapper"></div>
    </div>
  );
};

export default HomeFootWrapper;

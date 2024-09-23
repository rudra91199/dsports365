import HomeCricketPost from "../HomeCricketPost/HomeCricketPost";
import "./homeCricketWrapper.css";
import StayConnected from "../StayConnected/StayConnected";
import MostPopularCricket from "../MostPopularCricket/MostPopularCricket";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

const HomeCricketWrapper = () => {
  const [cricketNav, setCricketNav] = useState("");
  const [page, setPage] = useState(0);

  const handleCatPage = (cat) => {
    setCricketNav(cat);
    setPage(0);
  };

  const { data: { result, count } = {}, isLoading } = useFetch(
    `/posts/allNews?category=${"ক্রিকেট"}&subcategory=${cricketNav}&page=${page}&limit=${6}`,
    ["cricketNews", cricketNav, page]
  );


  return (
    <div className="homeCricketContainer homeWrapper">
      <div className="leftWrapper">
        <div className="homeCatNav">
          <p>ক্রিকেট</p>
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

        <HomeCricketPost news={result} />

        <button disabled={page == 0} onClick={() => setPage(page - 1)}>
          <IoIosArrowBack />
        </button>
        <button
          disabled={(page + 1 )* 6 >= count}
          onClick={() => setPage(page + 1)}
        >
          <IoIosArrowForward />
        </button>
      </div>

      <div className="rightWrapper">
        <StayConnected />
        <MostPopularCricket />
      </div>
    </div>
  );
};

export default HomeCricketWrapper;

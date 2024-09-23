import "./moreSports.css";
import djokovich from "../../assets/images/Trending Image/NovakDjokovic.jpg";
import federer from "../../assets/images/Trending Image/RogerFederer2.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import moment from "moment";
import { useCleanAndTruncateText } from "../../hooks/useCleanAndTruncateText";
import { useIncreaseCount } from "../../hooks/useIncreaseCount";
import { useNavigate } from "react-router-dom";

const MoreSports = () => {
  const [cricketNav, setCricketNav] = useState("");
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const handleCatPage = (cat) => {
    setCricketNav(cat);
    setPage(0);
  };
  const { data: { result, count } = {}, isLoading } = useFetch(
    `/posts/allNews?category=${"আরও খেলা"}&subcategory=${cricketNav}&page=${page}&limit=${5}`,
    ["othersNews", cricketNav, page]
  );

  return (
    <div className="moreSports homeWrapper">
      <div className="leftWrapper">
        <div className="homeCatNav">
          <p>আরো খেলা</p>

          <p
            onClick={() => handleCatPage("")}
            className={`${cricketNav == "" && "selected"}`}
          >
            অল
          </p>
          <p
            onClick={() => handleCatPage("টেনিস")}
            className={`${cricketNav == "টেনিস" && "selected"}`}
          >
            টেনিস
          </p>

          <p
            onClick={() => handleCatPage("অ্যাটলেটিক্স")}
            className={`${cricketNav == "অ্যাথলেটিক্স" && "selected"}`}
          >
            অ্যাথলেটিক্স
          </p>
          <p
            onClick={() => handleCatPage("অন্যান্য খেলা")}
            className={`${cricketNav == "অন্যান্য খেলা" && "selected"}`}
          >
            অন্যান্য
          </p>
        </div>

        <div className="moreSportsPost">
          {result?.slice(0, 1).map((data) => (
            <div
              className="moreSportsFirst"
              onClick={() => {
                useIncreaseCount(data?._id, data?.count);
                navigate(`/news/${data?.slug}`, {
                  state: data?._id,
                });
              }}
            >
              <div className="image-container">
                <img src={data?.image.url} alt="" />
                <span>টেনিস</span>
              </div>

              <div className="home-cricket-content">
                <h2>{data.title.slice(0, 60) + "..."}</h2>
                <p>
                  {data.writer.name} -{" "}
                  <span>{moment(data.createdAt).format("ll")}</span>
                </p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: useCleanAndTruncateText(data.desc || "", 180),
                  }}
                />
              </div>
            </div>
          ))}
          {result?.slice(1, 5).map((data, i) => (
            <div
              className="moreSportsRemain"
              key={i}
              onClick={() => {
                useIncreaseCount(data?._id, data?.count);
                navigate(`/news/${data?.slug}`, {
                  state: data?._id,
                });
              }}
            >
              <img src={data?.image.url} alt="" />
              <div>
                <h4>{data?.title.slice(0, 60) + "..."}</h4>
                <p>{moment(data?.createdAt).format("ll")}</p>
              </div>
            </div>
          ))}
        </div>

        <button disabled={page == 0} onClick={() => setPage(page - 1)}>
          <IoIosArrowBack />
        </button>
        <button
          disabled={(page + 1) * 5 >= count}
          onClick={() => setPage(page + 1)}
        >
          <IoIosArrowForward />
        </button>
      </div>

      <div className="rightWrapper"></div>
    </div>
  );
};

export default MoreSports;

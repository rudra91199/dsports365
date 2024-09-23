import { useParams } from "react-router-dom";
import "./allSportsPost.css";
import { useFetch } from "../../../hooks/useFetch";
import { useState } from "react";

const AllSportsPost = () => {
  const { category, subcategory } = useParams();
  const [page, setPage] = useState(0);

  const { data: { result, count } = {}, isLoading } = useFetch(
    `/posts/allNews?category=${category}&subcategory=${subcategory}&page=${page}&limit=${4}`,
    ["cricketNews", category, subcategory]
  );

  const catSub = {
    cricFoot: ["জাতীয়", "আন্তর্জাতিক"],
    others: ["টেনিস", "অ্যাথলেটিক্স", "অন্যান্য"],
  };

  return (
    <div
      className={`allSportsPost 
      ${category == "ক্রিকেট" && "cricket-posts-layout"} 
      ${category == "ফুটবল" && "football-posts-layout"} 
      ${category == "আরও খেলা" && "others-posts-layout"}
      `}
    >
      <div className="banner">
        <h2 className="container">{category}</h2>
        <div className="subs container">
          {category == "আরও খেলা"
            ? catSub.others.map((sub) => <span>{sub}</span>)
            : catSub.cricFoot.map((sub) => <span>{sub}</span>)}
        </div>
      </div>

      <div className="homeWrapper container">
        <div className="leftWrapper">
            
        </div>

        <div className="rightWrapper">

        </div>
      </div>
    </div>
  );
};

export default AllSportsPost;

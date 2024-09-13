import { useEffect, useState } from "react";
import "./singleNews.css";
import adminImg from "../../assets/Debbarata Mukherjee.jpg";
import { format } from "date-fns";

const SingleNews = () => {
  const [news, setNews] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/posts/post/66e341efa4a717760795634a")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  const date = news.createdAt && new Date(news.createdAt);

  const formatedDate = date && format(date, "MMMM dd, yyyy");

  return (
    <div className="singleNews container">
      <div>
        <p className="category">{news.category}</p>
        <p className="title">{news.title}</p>
        {news.slogan && <p className="slogan">{news.slogan}</p>}
        <div className="createdBy">
          <img src={adminImg} alt="" />{" "}
          <p>
            By <span>Debbrata Mukherjee</span>
          </p>
          <p className="time">{formatedDate}</p>
        </div>
        <div className="imageWrapper">
          <img src={news?.image?.url} alt="" />
        </div>
        <div
          className="desc"
          dangerouslySetInnerHTML={{ __html: news.desc }}
        />
      </div>
      <div className="sidebar"></div>
    </div>
  );
};

export default SingleNews;

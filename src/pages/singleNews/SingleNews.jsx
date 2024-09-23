import { useEffect, useState } from "react";
import "./singleNews.css";
import adminImg from "../../assets/Debbarata Mukherjee.jpg";
import { format } from "date-fns";
import { useLocation, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const SingleNews = () => {
  const { slug } = useParams();
  const state = useLocation().state;
  console.log(state);
  const {
    data: { result, count } = {},
    isLoading,
    refetch,
  } = useFetch(`/posts/getSingleNews?id=${state}`, ["singleNews", state]);

  const date = result?.createdAt && new Date(result?.createdAt);

  const formatedDate = date && format(date, "MMMM dd, yyyy");

  console.log(result);
  useEffect(() => {
    refetch();
  }, [slug]);

  return (
    <div className="singleNews container">
      <div>
        <p className="category">
          {result?.category} {result?.count}
        </p>
        <p className="title">{result?.title}</p>
        {result?.slogan && <p className="slogan">{result?.slogan}</p>}
        <div className="createdBy">
          <img src={result?.writer.image.url} alt="" />{" "}
          <p>
            By <span>{result?.writer.name}</span>
          </p>
          <p className="time">{formatedDate}</p>
        </div>
        <div className="imageWrapper">
          <img src={result?.image?.url} alt="" />
        </div>
        <div
          className="desc"
          dangerouslySetInnerHTML={{ __html: result?.desc }}
        />
      </div>
      <div className="sidebar"></div>
    </div>
  );
};

export default SingleNews;

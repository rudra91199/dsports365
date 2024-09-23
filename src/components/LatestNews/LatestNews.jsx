import "./latestNews.css";
import latest from "../../assets/images/Trending Image/Neymar.jpg";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import moment from "moment";
import { useCleanAndTruncateText } from "../../hooks/useCleanAndTruncateText";
import ReactPaginate from "react-paginate";

const LatestNews = () => {
  const [cricketNav, setCricketNav] = useState("");
  const [page, setPage] = useState(0);

  const { data: { result, count } = {}, isLoading } = useFetch(
    `/posts/allNews?exclude=${"সাক্ষাৎকার"}&page=${page}&limit=${8}`,
    ["recentNews", cricketNav, page]
  );

  const totalPages = Math.ceil(count / 8);

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index);

  const handlePageClick = (event) => {
    setPage(event.selected);
  };


  return (
    <div className="latestNewsWrapper homeWrapper">
      <div className="leftWrapper">
        <div className="homeCatNav">
          <p>সর্বশেষ সংবাদ</p>
        </div>

        <div className="latestPostContainer">
          {result?.map((data) => (
            <div className="home-cric-two-post">
              <div className="image-container">
                <img src={data.image.url} alt="" />
                <span>{data.category}</span>
              </div>

              <div className="home-cricket-content">
                <h2>{data.title}</h2>
                <p>
                  {data.writer.name} -{" "}
                  <span>{moment(data?.createdAt).format("lll")}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* {pageNumbers.map((postNumber, i) => (
          <span className="pagination-number" onClick={() => setPage(i)}>
            {i + 1}
          </span>
        ))} */}
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={totalPages}
          previousLabel="<"
          activeLinkClassName="currentPage"
          disabledLinkClassName='disabledPage'
          renderOnZeroPageCount={null}
        />

      </div>

      <div className="rightWrapper"></div>
    </div>
  );
};

export default LatestNews;

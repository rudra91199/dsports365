import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useFetch } from "../../../hooks/useFetch";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
import moment from "moment/moment";

const Search = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const enableSearch = searchText.length > 2;

  const { data: { data: { result } = {} } = {}, isLoading } = useQuery({
    queryKey: ["searchedProducts", searchText],
    queryFn: () => {
      return makeRequest.get(`posts/getProductByQuery/${searchText}`);
    },
    enabled: enableSearch,
  });

  useEffect(() => {
    if (searchOpen === true) {
      document.body.addEventListener("click", () => {
        setSearchOpen(false);
        setSearchText("");
      });
    }
  }, [searchOpen]);

  console.log(result);

  return (
    <div className="search">
      <IoSearch
        onClick={(e) => {
          e.stopPropagation();
          setSearchOpen(!searchOpen);
          setSearchText("");
        }}
      />
      <div className={`searchContainer ${searchOpen && "searchContainerOpen"}`}>
        <div className={`searchBar`} onClick={(e) => e.stopPropagation()}>
          <>
            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
            <button>
              Search <MdOutlineKeyboardArrowRight />
            </button>
          </>
        </div>
        {result?.length > 0 && (
          <div className="searchedProducts-container">
            <p>
              Search Result for - <strong>{searchText}</strong>
            </p>
            <div className="searchedProducts">
              {result?.slice(0, 4).map((news) => (
                <div>
                  <img src={news.image.url} alt="" />
                  <p>{news.title}</p>
                  <span>{moment(news.createdAt).format("LL")}</span>
                </div>
              ))}
            </div>
            <button>View All Results</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

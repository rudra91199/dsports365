import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useFetch } from "../../../hooks/useFetch";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";

const Search = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const enableSearch = searchText.length > 2;

  const { data: { result } = {}, isLoading } = useQuery({
    queryKey: ["searchedProducts", searchText],
    queryFn: () => makeRequest.get(`posts/getProductByQuery/${searchText}`),
  });

  useEffect(() => {
    if (searchOpen === true) {
      document.body.addEventListener("click", () => {
        setSearchOpen(false);
      });
    }
  }, [searchOpen]);

  console.log(result);
  console.log(searchText.length);

  return (
    <div className="search">
      <IoSearch
        onClick={(e) => {
          e.stopPropagation();
          setSearchOpen(!searchOpen);
        }}
      />
      <div className={`searchContainer ${searchOpen && "searchContainerOpen"}`}>
        <div className={`searchBar`} onClick={(e) => e.stopPropagation()}>
          <>
            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button>
              Search <MdOutlineKeyboardArrowRight />
            </button>
          </>
        </div>
        <div className="searchedProducts"></div>
      </div>
    </div>
  );
};

export default Search;

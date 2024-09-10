import { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Search = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (searchOpen === true) {
      document.body.addEventListener("click", () => {
        setSearchOpen(false);
      });
    }
  }, [searchOpen]);

  return (
    <div className="search">
      <IoSearch
        onClick={(e) => {
          e.stopPropagation();
          setSearchOpen(!searchOpen);
        }}
      />
      <div
        className={`searchBar ${searchOpen && "searchBarOpen"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <>
          <input type="text" />
          <button>
            Search <MdOutlineKeyboardArrowRight />
          </button>
        </>
      </div>
    </div>
  );
};

export default Search;

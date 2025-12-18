import React, { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import "./SearchBar.css";
import { IoMdClose } from "react-icons/io";

const SearchBar = () => {
   const { search, setSearch, showSearchBar, setShowSearchBar } = useContext(SearchContext);

   return (
      showSearchBar && (
         <div className="searchbar">
            <input
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               type="text"
               placeholder="Search products ..."
            />
            <IoMdClose onClick={() => setShowSearchBar(false)} />
         </div>
      )
   );
};

export default SearchBar;

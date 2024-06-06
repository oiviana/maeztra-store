import { GoSearch } from "react-icons/go";

import SearchBar from "./SearchBar";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Search() {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(true);

  return (
    <div className="flex px-2 lg:px-0  w-full lg:max-w-[49.438rem]">
      <button
        className="absolute top-[1.8rem] z-10 right-[6rem] lg:hidden"
        onClick={() => setShowSearchBar(true)}
      >
        <GoSearch size={30} />
      </button>
      <div className={`${showSearchBar ? "flex" : "hidden"} w-full`}>
        <SearchBar/>
        <button
          className="flex items-center lg:hidden"
          onClick={() => setShowSearchBar(false)}
        >
          <IoClose size={30} />
        </button>
      </div>
    </div>
  );
}

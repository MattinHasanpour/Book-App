import { IoSearchOutline } from "react-icons/io5";

import styles from "./searchBox.module.css";

function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div className="flex items-center text-center justify-center">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        placeholder="Search Title"
        className="border items-center text-center justify-center border-gray-300 rounded-l-md px-4 py-2 focus:outline-none"
      />
      <button
        onClick={searchHandler}
        className="bg-gray-900 h-8 text-white rounded-r-md px-4 py-2 hover:bg-gray-700 focus:outline-none"
      >
        <IoSearchOutline className="size-6" />
      </button>
    </div>
  );
}

export default SearchBox;

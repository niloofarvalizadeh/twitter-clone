import React from "react";
import { useState } from "react";
import { SearchOutlined } from "@mui/icons-material";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className="max-w-md mx-auto mt-3 w-full h-11" onSubmit={handleSubmit}>
      <label
        htmlFor="default-search"
        className="mb-1 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative rounded-lg">
        {/* Search Icon */}
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none opacity-5">
          <SearchOutlined className="text-gray-500" />
        </div>

        {/* Search field */}
        <input
          type="search"
                  value={searchTerm}
                  onChange={handleChange}
          id="default-search"
          className="block w-full focus:outline-none p-3 ps-10 text-xs text-gray-900 border border-gray-300 
                               rounded-3xl bg-Dark6 opacity-15 focus:ring-blue-500 focus:border-Primary-Blue
                               dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                               dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          style={{ fontSize: "14px" }}
          placeholder="Search Twitter..."
          required
        />
      </div>
    </form>
  );
}

export default SearchBar;

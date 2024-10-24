import React from 'react';
import { SearchOutlined } from '@mui/icons-material';

function SearchBar() {
    return (
        <form className="max-w-md mx-auto">
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative rounded-lg">

                {/* Search Icon */}
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <SearchOutlined className='h-[19px] w-[19px]'></SearchOutlined>

                </div>

                {/* Search field */}

                <input type="search" id="default-search" className="block w-full focus:outline-none
                p-4 ps-10 text-sm text-gray-900 border border-gray-300 
                rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-Primary-Blue
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Twitter..." required />
            

            {/* Search buttom */}
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5
         bg-Primary-Blue hover:bg-blue-800 focus:ring-4 focus:outline-none
          focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2
           dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Search
            </button>
        </div>
        </form >
    )
}


export default SearchBar;

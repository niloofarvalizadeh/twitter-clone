import React from 'react';
import { SearchOutlined } from '@mui/icons-material';

function SearchBar() {
    return (
      
        <form className="max-w-md mx-auto mt-4 w-11/12 ">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative rounded-lg">

                {/* Search Icon */}
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none opacity-5">
                    <SearchOutlined className='h-[19px] w-[19px]'></SearchOutlined>
                </div>

                {/* Search field */}
                <input
                    type="search"
                    id="default-search"
                    className="block w-full focus:outline-none p-4 ps-10 text-sm text-gray-900 border border-gray-300 
                               rounded-3xl bg-Dark6 opacity-15 focus:ring-blue-500 focus:border-Primary-Blue
                               dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                               dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    style={{ fontSize: '16px' }}  
                    placeholder="Search Twitter..."
                    required
                />
            </div>
        </form>
  
    );
}

export default SearchBar;

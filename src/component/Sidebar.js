
import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GoBell, GoHash, GoUnread, GoBookmark, GoChecklist, GoPerson } from "react-icons/go";
import { CgMoreO } from "react-icons/cg";
import '../style/main.css';
import { Link } from 'react-router-dom';


const menuItems = [
  { icon: <AiFillHome className='h-[30px] w-[30px]' />, text: 'Home', to: '/home' },
  { icon: <GoBell className='h-[30px] w-[30px]' />, text: 'Explore', to: '/explore' },
  { icon: <GoHash className='h-[30px] w-[30px]' />, text: 'Notification', to: '/notification' },
  { icon: <GoUnread className='h-[30px] w-[30px]' />, text: 'Messages', to: '/messages' },
  { icon: <GoBookmark className='h-[30px] w-[30px]' />, text: 'Bookmarks', to: '/bookmarks' },
  { icon: <GoChecklist className='h-[30px] w-[30px]' />, text: 'Lists', to: '/lists' },
  { icon: <GoPerson className='h-[30px] w-[30px]' />, text: 'Profile', to: '/userprofilepage' },
  { icon: <CgMoreO className='h-[30px] w-[30px]' />, text: 'More', to: '/more' },
];

function Sidebar() {

  return (
    <div style={{ margin: 'auto', borderRight: '2px solid #EBEEF0' }}>
      <nav className='sidebar-nav w-full'>
        <ul className='flex items-start flex-col m-2 ml-9' >
          <li className='custom-li no-hover'>
            <FaSquareXTwitter className='h-[38px] w-[38px]' />
          </li>

          {menuItems.map((item, index) => (
            <li key={index} className='custom-li mb-4'>
              <Link to={item.to} className="flex items-center">
                {React.cloneElement(item.icon, {
                  style: { color: item.text === 'Home' ? '#007BFF' : 'inherit' },
                  className: 'h-[30px] w-[30px]'
                })}
                <span className='ml-4'>{item.text}</span>
              </Link>
            </li>
          ))}

          <div className="h-[40px] w-[240px] mt-2">
            {/* <button
                onClick={handleLogout}
                className="bg-Primary-Blue w-full h-[50px] rounded-full py-2 px-4
             text-white font-bold transition-colors duration-300 ease-in-out hover:bg-[#1664b3]">
                Log Out
              </button> */}
            {/* <LogoutButton /> */}
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;

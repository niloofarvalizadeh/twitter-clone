import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  GoBell,
  GoHash,
  GoUnread,
  GoBookmark,
  GoChecklist,
  GoPerson,
} from "react-icons/go";
import { CgMoreO } from "react-icons/cg";
import "../style/main.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

const menuItems = [
  {
    icon: <AiFillHome className="h-[30px] w-[30px]" />,
    text: "Home",
    to: "/home",
  },
  {
    icon: <GoBell className="h-[30px] w-[30px]" />,
    text: "Explore",
    to: "/explore",
  },
  {
    icon: <GoHash className="h-[30px] w-[30px]" />,
    text: "Notification",
    to: "/notification",
  },
  {
    icon: <GoUnread className="h-[30px] w-[30px]" />,
    text: "Messages",
    to: "/messages",
  },
  {
    icon: <GoBookmark className="h-[30px] w-[30px]" />,
    text: "Bookmarks",
    to: "/bookmarks",
  },
  {
    icon: <GoChecklist className="h-[30px] w-[30px]" />,
    text: "Lists",
    to: "/lists",
  },
  {
    icon: <GoPerson className="h-[30px] w-[30px]" />,
    text: "Profile",
    to: "/userprofilepage",
  },
  {
    icon: <CgMoreO className="h-[30px] w-[30px]" />,
    text: "More",
    to: "/more",
  },
];

export default function Sidebar() {
  const location = useLocation();
  return (
    <div className="border-r-2 border-gray-200 p-4">
      <nav className="sidebar-nav w-full">
        <ul className="flex flex-col items-start ml-5 gap-2">
          <li className="custom-li no-hover mb-5">
            <FaSquareXTwitter className="h-10 w-10 text-black" />
          </li>

          {menuItems.map((item, index) => (
            <li
              key={index}
              className="mb-3 gradient-hover px-4 py-2 cursor-pointer"
            >
              <Link to={item.to} className="flex items-center relative z-10">
                {React.cloneElement(item.icon, {
                  className:
                    "icon h-[28px] w-[28px] transition-all duration-300",
                })}
                <span className="text ml-4 text-[17px] font-medium transition-colors duration-300">
                  {item.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

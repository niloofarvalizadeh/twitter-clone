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
import { useLocation, Link } from "react-router-dom";

const menuItems = [
  { icon: <AiFillHome />, text: "Home", to: "/home" },
  { icon: <GoBell />, text: "Explore", to: "/explore" },
  { icon: <GoHash />, text: "Notification", to: "/notification" },
  { icon: <GoUnread />, text: "Messages", to: "/messages" },
  { icon: <GoBookmark />, text: "Bookmarks", to: "/bookmarks" },
  { icon: <GoChecklist />, text: "Lists", to: "/lists" },
  { icon: <GoPerson />, text: "Profile", to: "/userprofilepage" },
  { icon: <CgMoreO />, text: "More", to: "/more" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="min-h-screen text-white flex flex-col justify-between border-r border-Dark7">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between px-6 py-4 border-b  border-Dark7-700">
          <FaSquareXTwitter className="h-10 w-10 text-black" />
        </div>

        {/* Nav Items */}
        <nav className="mt-4 space-y-1 px-4">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={index}
                to={item.to}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "bg-gray-100 text-black font-semibold"
                    : "hover:bg-gray-100 text-gray-800"
                }`}
              >
                {React.cloneElement(item.icon, {
                  className: "h-[26px] w-[26px]",
                 
                })}
                <span className="text-base">{item.text}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

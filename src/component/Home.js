import React from "react";
import Sidebar from "./Sidebar";
import Rightmenu from "./RightMenu/Rightmenu";
import Feed from "./Feed";

export default function Home() {
  return (
    <div className="body">
      <div className="section-1">
        {" "}
        <Sidebar />{" "}
      </div>
      <div className="section-2">
        <Feed />
      </div>
      <div className="section-3">
        <Rightmenu />
      </div>
    </div>
  );
}

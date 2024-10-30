import React from "react";
import Sidebar from "./Sidebar";
import Rightmenu from "./Rightmenu";
import Feed from "./Feed";


const Home = () => {

return(
        <div className="body">
        <div class="section-1"> <Sidebar/> </div>
        <div class="section-2"><Feed/></div>
        <div class="section-3"><Rightmenu/></div>

    </div>
)
}

export default Home;
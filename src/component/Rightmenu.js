import React from "react";
import SearchBar from "./SearchBar";
import WhoToFollow from "./WhoToFollow";
import News from "./News";

const Rightmenu = () => {

    return (
        <div className="section-3 items-center" >

            <SearchBar />
            <div className="h-[600px]  w-max mx-auto "><News /></div>
           <div className=""><WhoToFollow /></div> 

        </div>
    )


}

export default Rightmenu;
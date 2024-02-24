import React from "react";
import "./index.css"
import web from "../src/images/img1.png"
import CommonPage from "./CommonPage";

const Home=()=>{
    return(
        <>
         <CommonPage name="Grow Your Business with"
                   imgsrc={web}
                   visit="/service"
                   btnname="Get Started"/>
        </>
    )
};

export default Home;
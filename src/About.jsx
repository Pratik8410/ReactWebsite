import React from "react";
import "./index.css"
import web from "../src/images/img2.png"
import CommonPage from "./CommonPage";

const About=()=>{
    return(
        <>
       <CommonPage name="Welcome To About Page"
                   imgsrc={web}
                   visit="/contact"
                   btnname="Contact Now"/>
        </>
    )
};

export default About;
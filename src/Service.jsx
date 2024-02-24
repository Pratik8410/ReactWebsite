import React from "react";
// import {Link} from "react-router-dom"
// import Card1 from "../src/images/card1.jpg"
import Card from "./Card"
import Sdata from "./Sdata";

const Service = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <h1 className=" text-center">Our Services</h1>
                </div>
            </div>

            <div className="container mb-5">
                <div className="row  ">
                    <div className="col-10  mx-auto  ">
                        <div className="row  gy-4 ">
                            {
                                Sdata.map((val, ind) => {
                                    return <Card key={ind} imgsrc={val.ImgSrc} title={val.title} />
                                })
                            }
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
};

export default Service;
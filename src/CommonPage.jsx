import React from "react";
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import "./index.css"
// import web from "../src/images/img1.png"

const CommonPage=(props)=>{
    return(
        <>
        <section id="header" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pt-5 order-2 order-lg-1 d-flex flex-column justify-content-center ">
                        <h1>{props.name}<br/>
                        <strong className="brand-name">CodeTech</strong>
                        </h1>
                        <h2 className="mt-3">We are the talented Web devloper for making websites</h2>
                        <div className="mt-3">
                           <Button><Link to={props.visit} variant="contained" color="success" className=" btn nav-link" >{props.btnname}</Link></Button> 
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <img src={props.imgsrc} className="img-fluid w-75 animate" alt="" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
};

export default CommonPage;
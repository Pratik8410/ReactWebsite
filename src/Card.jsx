import React from "react";
import { Link } from "react-router-dom"


const Card = (props) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12 col-sm-12 d-flex justify-content-center align-items-center  mx-auto">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={props.imgsrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>



            </div>

        </>
    )
};

export default Card;
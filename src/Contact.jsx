import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: " ",
        email: "",
        msg: "",
    })

const InputEvent=(event)=>{
   const{name,value}=event.target;
   setData((preval)=>{
    return{
        ...preval,
        [name]:value,
    }
   })
}

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}
               My number is ${data.phone}
               My email address is ${data.email}
               Here is what i want to say,${data.msg}`)
    }
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <h1 className="text-center">Contact Us</h1>
                </div>
            </div>

            <div className="contianer">
                <div className="row">
                    <div className="col-lg-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlfor="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" name="fullname" value={data.fullname} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Enter Your Full Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlfor="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number" className="form-control" name="phone" value={data.phone} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Enter Your Mobile Number" />
                            </div>
                            <div className="mb-3">
                                <label htmlfor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" name="email" value={ data.email} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Enter Your email" />
                            </div>
                            <div className="mb-3">
                                <label htmlfor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" name="msg" value={data.msg} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button class="btn btn-primary" type="submit">Button</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )
};

export default Contact;
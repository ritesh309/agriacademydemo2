import React, { useState } from 'react'

import Navbar from './components/Navbar';

import "./Home.css"
function Contact() {

    const [data, setData] = useState(
        {
            fullname: "",
            email: "",
            ph: "",
            msg: ""
        }
    );
    const InputEvent = ( event ) => {
        const { name, value } = event.target;
        setData( ( preVal ) => {
            return {
                ...preVal,
                [name]: value
            }
        } )
    }
    const formSubmit = ( e ) => {
        e.preventDefault();
        alert( `My name is ${ data.fullname } , Phone number: ${ data.ph } ,email is ${ data.email } and I have Messaged : ${ data.msg }` );

    }
    return (
        <><Navbar />
            <br />
            <br />

            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <form onSubmit={formSubmit} >
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10  mx-auto ">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter Your Fullname" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="name@example.com" />
                            </div>
                            <div class="mb-3 ">
                                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1"
                                    name="ph"
                                    value={data.ph}
                                    onChange={InputEvent}
                                    placeholder="enter your phone number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label" >Message !</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline btn-primary" type="submit" onSubmit={formSubmit}>Submit Responce</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Contact

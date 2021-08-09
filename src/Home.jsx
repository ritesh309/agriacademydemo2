import React from 'react'
import HomeImg from "../src/images/home_svg.svg"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Home.css"
import Navbar from "../src/components/Navbar"
import { NavLink } from "react-router-dom";
import "./Home.css"
function Home() {
    return (
        <>  <Navbar />
            <br />
            <br />
            <br />
            <br />
            <br />
            <section className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10  mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-items-center flex-column">
                                    <h1> <strong className="brand-name" >Faculty Section </strong></h1>
                                    <h2 className="my-3 "></h2>
                                    <div className="mt-3">
                                        <NavLink to="./contact" className="btn-get-started">Getting Started</NavLink>
                                    </div><br />
                                    <br />
                                    <br />
                                    <h1> <strong className="brand-name" >Student Section </strong></h1>
                                    <h2 className="my-3 "></h2>
                                    <div className="mt-3">
                                        <NavLink to="./contact" className="btn-get-started">Getting Started</NavLink>
                                    </div>
                                    <br />
                                    <br />
                                    <h1> <strong className="brand-name" >Admin Section </strong></h1>
                                    <h2 className="my-3 "></h2>
                                    <div className="mt-3">
                                        <NavLink to="./contact" className="btn-get-started">Getting Started</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-2 header-img"  >
                                    <img src={HomeImg} className="img-fluid animated" alt="img not found" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home

import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "./Home.css"
function Common( props ) {
    return (
        <>
            <section className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10  mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-items-center flex-column">
                                    <h1>You are  most  |  Welcome   |Here We Go | 

                                        <strong className="brand-name" >{props.name} </strong>
                                    </h1>
                                    <h2 className="my-3 "></h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn-get-started">{props.btn}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-2 header-img"  >
                                    <img src={props.imgsrc} className="img-fluid animated" alt="img not found" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common

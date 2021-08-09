import React from 'react'

import { NavLink } from "react-router-dom";

function Card( props ) {
    return (
        <> 
      
            <div className="col-md-4 col-11 mx-auto">
                <div className="card border-3 " >
                    <img src={props.imgsrc} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick tips and tricks to build the your carrier in technology. Start The Journey</p>
                        <NavLink to="/" class="btn btn-primary">Happy Learning !</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card

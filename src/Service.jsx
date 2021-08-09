import React from 'react'
import Card from "./Card"
import ServiceData from "./ServiceData"
import Navbar from "../src/components/Navbar"
function Service() {
    return (
        <> <Navbar />
            <br />
            <br />

            <div className="my-6">
                <h1 className="text-center ">Our Services</h1>
            </div>
            <div className="container-fluid mb-6 mt-5 ">
                <div className="row gy-6">
                    <div className="col-10 mx-auto ">
                        <div className="row gy-4">
                            {
                                ServiceData.map( ( val, index ) => {
                                    return <Card
                                        key={index}
                                        imgsrc={val.imgsrc}
                                        title={val.title} />
                                } )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service

import React, { useState } from 'react';
import './style.css'

const restro = ({ eventname, plan }) => {
    const [planeventname, setplaneventname] = useState(eventname);
    const [restroplan, setrestro] = useState(plan);

    const restrodata = (cat) => {
        if (cat == "All") {
            setrestro(plan);
        } else {
            const f = plan.filter((product) => product.catogry === cat);
            setrestro(f);
        }

    }

    return (
        <div className='mt-2 body'>
            <div className='transform'>
                <h2 className='header text-white'>Evening Unfolds Events</h2>
            </div>
                <button className='btn btn-light  mt-3 ' onClick={() => restrodata("All")}>All</button>
                {planeventname.map((i, index) => (
                    <button onClick={() => restrodata(i.catogry)} className='btn btn-primary mt-3 mx-3' key={index}> {i.catogry}</button>
                ))}
                <br /><br />
                <div className='container'>
                    <div className='row'>
                        {restroplan.map((plan, index) => (
                            <div key={index} className='col-lg-3'>
                                <div className="main-card mt-5" style={{ width: '18rem', height: "25rem" }}>
                                    <img className="card-img-top" src={plan.image} alt="Product" />

                                    <h5 className="card-name mt-4">Event Name: {plan.name}</h5>
                                    <p className="card-price mt-2">Package Price: {plan.price}</p>
                                    <button className='btn btn-primary  w-90'>Book Now</button>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            
        </div>
    );
}

export default restro;

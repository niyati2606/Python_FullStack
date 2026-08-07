import React from "react";

function FunctionProps({ img, title, desc }) {
    return (
        <div className='col-md-3 mt-3'>
            <div className="card" style={{ width: '18rem' }}>
                <img src={img}
                    className="card-img-top"
                    alt="..."
                    style={{ height: '220px', objectFit: 'cover' }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <button className='btn btn-info'>View More</button>
                </div>
            </div>
        </div>
    )
}

export default FunctionProps
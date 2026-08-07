import React, { Component } from "react";

class ClassProps extends Component {

    constructor(props) {
        super(props);
        this.data = props
    }

    render() {
        return (
            <div className='col-md-3 mt-3'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={this.data.img}
                        className="card-img-top"
                        alt="..."
                        style={{ height: '220px', objectFit: 'cover' }} />
                    <div className="card-body">
                        <h5 className="card-title">{this.data.title}</h5>
                        <p className="card-text">{this.data.desc}</p>
                        <button className='btn btn-info'>View More</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default ClassProps
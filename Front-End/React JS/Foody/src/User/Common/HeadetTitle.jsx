import React from 'react'
import { Link } from 'react-router-dom'

function HeadetTitle({title, name}) {
    return (
        <div>
            <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="display-3 mb-3 animated slideInDown">{title}</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><Link className="text-body" to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link className="text-body" to = "/">Pages</Link></li>
                            <li className="breadcrumb-item text-dark active" aria-current="page">{name}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default HeadetTitle
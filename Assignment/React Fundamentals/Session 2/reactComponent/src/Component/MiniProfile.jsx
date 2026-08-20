import React from 'react'

function MiniProfile() {
    return (
        <div>
            <h1>MiniProfile</h1>
            <div className="card mb-3" style={{ maxWidth: 400 }}>
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://img.favpng.com/3/11/24/3d-woman-avatar-stylized-cartoon-woman-avatar-with-glasses-g0FutwYY.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Niyati</h5>
                            <p className="card-text">Learner | Achiver | 📍Amd</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MiniProfile
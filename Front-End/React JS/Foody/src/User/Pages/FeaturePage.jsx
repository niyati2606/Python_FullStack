import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'
import HeadetTitle from '../Common/HeadetTitle'
import Footer from '../Common/Footer'
import axios from 'axios'

function FeaturePage() {

    const [features, setFeatures] = useState([])

    useEffect(() => {
        fetchFeatures()
    }, [])

    const fetchFeatures = async () => {
        try {
            const res = await axios.get("http://localhost:3000/features")
            console.log(res.data)
            setFeatures(res.data)
        } catch (error) {
            console.log("product not found", error)
        }
    }

    return (
        <div>
            <Header />
            <HeadetTitle name="Features" title="Features" />

            {/* Feature Start */}
            <div className="container-fluid bg-light bg-icon py-6">
                <div className="container">
                    <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                        <h1 className="display-5 mb-3">Our Features</h1>
                        <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className="row g-4">
                        {
                            features && features.map((features, index) => {
                                return (
                                    <div
                                        className="col-lg-4 col-md-6 wow fadeInUp"
                                        key={features.features_id}>
                                        <div className="bg-white text-center h-100 p-4 p-xl-5 shadow-sm rounded">
                                            <img
                                                className="img-fluid mb-4"
                                                src={features.features_icon}
                                                alt={features.features_title || 'Feature icon'}
                                                style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                                            />
                                            <h4 className="mb-3">{features.features_title}</h4>
                                            <p className="mb-4">{features.features_description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {/* Feature End */}

            <Footer />
        </div>
    )
}

export default FeaturePage
import React, { useState } from 'react'
import AdminHeader from '../../Admin Common/AdminHeader'
import AdminHeaderTitle from '../../Admin Common/AdminHeaderTitle'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AdminSidebar from '../../Admin Common/AdminSideBar'

function AddFeaturesPage() {

    const redirect = useNavigate()

    const [features, setFeatures] = useState({
        features_id: "",
        features_title: "",
        features_description: "",
        features_icon: ""
    })

    const getFeaturesData = (event) => {
        setFeatures({
            ...features,
            features_id: new Date().getTime().toString(),
            [event.target.name]: event.target.value
        })

        console.log(features)
    }

    const addFeaturesData = async (event) => {
        event.preventDefault()

        try {

            if (features.features_title == "" || features.features_icon == "" || features.features_description == "") {
                alert("Please fill require details..!!")
            } else {

                const addFeatureResponse = await axios.post("http://localhost:3000/features", features)
                console.log(addFeatureResponse.data)

                setFeatures({
                    features_id: "",
                    features_title: "",
                    features_description: "",
                    features_icon: ""
                })

                redirect("/managefeatures")
                alert("Feature Added Successfully..!!")
            }
        } catch (error) {
            console.log("Internel Server Error :", error)
        }
    }

    return (
        <div>
            {/* <AdminHeader /> */}
            <AdminSidebar>
                <AdminHeaderTitle title="Add Features" name="Add Feature" />

                <div className="container-fluid bg-light bg-icon py-6">
                    <div className="container">
                        <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                            <h1 className="display-5 mb-3">Add Features</h1>
                        </div>
                        <div className="col col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <form onSubmit={addFeaturesData}>
                                <div className="row g-3">
                                    <div className="col">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" name='features_title' onChange={getFeaturesData} value={features.features_title} placeholder="Feature Name" />
                                            <label htmlFor="name">Feature Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="imgURL" name='features_icon' onChange={getFeaturesData} value={features.features_icon} placeholder="Feature Image URL" />
                                            <label htmlFor="imgURL">Feature Image URL</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Feature Description" name='features_description' onChange={getFeaturesData} value={features.features_description} id="description" style={{ height: 100 }} defaultValue={""} />
                                            <label htmlFor="description">Feature Description</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Add Feature</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </AdminSidebar>
        </div>
    )
}

export default AddFeaturesPage
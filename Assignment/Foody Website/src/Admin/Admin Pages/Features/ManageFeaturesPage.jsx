import React, { useEffect, useState } from 'react'
import AdminHeaderTitle from '../../Admin Common/AdminHeaderTitle'
import AdminHeader from '../../Admin Common/AdminHeader'
import useAPICall from '../../../Custom Hooks/useAPICall'
import AdminSidebar from '../../Admin Common/AdminSideBar'
import { toast } from 'react-toastify'
import axios from 'axios'

function ManageFeaturesPage() {


  const { apidata, fetchAPIData } = useAPICall("http://localhost:3000/features")

  useEffect(() => {
    fetchAPIData()
  }, [])

  //view single blog
  const [features, setFeatures] = useState({
    features_id: "",
    features_title: "",
    features_description: "",
    features_icon: ""
  })

  const viewFeature = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/features/${id}`)
      setFeatures(response.data)
    } catch (error) {
      toast.error("Internal Server Error : ", error)
    }
  }

  //delete
  const deleteFeature = async (id) => {
    try {
      const deleteResponse = await axios.delete(`http://localhost:3000/features/${id}`)
      toast.success("Feature Deleted Successfully..!!")
      fetchAPIData()
    } catch (error) {
      toast.error("Internal Server Error : ", error)
    }
  }

  //edit
  const [editfeatures, setEditFeatures] = useState({
    features_id: "",
    features_title: "",
    features_description: "",
    features_icon: ""
  })

  const editFeatures = (blog) => {
    setEditFeatures(blog)
  }

  const handleEditFeature = (event) => {
    setEditFeatures({
      ...editfeatures,
      [event.target.name]: event.target.value
    })
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:3000/features/${editfeatures.id}`, editfeatures)
      fetchAPIData() // refresh table
      document.getElementById('closeEditModalBtn').click() // close modal programmatically
      toast.success("Blog Updated Successfully..!!")
    } catch (error) {
      toast.error("Internal Server Error : ", error)
    }
  }


  return (
    <div>
      {/* <AdminHeader /> */}
      <AdminSidebar>
        <AdminHeaderTitle title="Manage Features" name="Manage Feature" />

        <div className="container-fluid bg-light bg-icon py-6">
          <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
              <h1 className="display-5 mb-3">Manage Features</h1>
            </div>
            <div className="row g-4">
              <div className="container my-5">
                <table className="table ">
                  <thead className='table table-dark'>
                    <tr className='text-center'>
                      <th scope="col">Image</th>
                      <th scope="col">Name</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      apidata && apidata.map((feature, index) => {
                        console.log(feature)
                        return (
                          <tr key={feature.feature_id} className="text-center">
                            {/* <th scope="row" className="fw-normal text-muted">#{feature.id}</th> */}
                            <td>
                              <img
                                src={feature.features_icon}
                                alt={feature.features_title}
                                style={{
                                  width: "56px",
                                  height: "56px",
                                  borderRadius: "10px",
                                  objectFit: "cover",
                                  border: "1px solid #e5e7eb"
                                }}
                              />
                            </td>
                            <td className="fw-semibold">{feature.features_title}</td>
                            <td>
                              <div className="d-flex justify-content-center gap-2">
                                <button
                                  className="btn btn-sm btn-outline-info"
                                  title="View"
                                  onClick={() => viewFeature(feature.id)}
                                  data-bs-toggle="modal" data-bs-target="#featureViewModal"
                                >
                                  <i className="fa fa-eye"></i> View
                                </button>
                                <button
                                  className="btn btn-sm btn-outline-success"
                                  title="Edit"
                                  onClick={() => editFeatures(feature)}
                                  data-bs-toggle="modal" data-bs-target="#featureEditModal"
                                >
                                  <i className="fa fa-pen"></i> Edit
                                </button>
                                <button
                                  className="btn btn-sm btn-outline-danger"
                                  title="Delete"
                                  onClick={() => deleteFeature(feature.id)}
                                >
                                  <i className="fa fa-trash"></i> Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        )
                      })
                    }

                  </tbody>
                </table>

                {/* View blog Modal */}
                <div className="modal fade" id="featureViewModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Feature Preview</h1>
                      </div>
                      <div className="modal-body">
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
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Edit Feature Modal */}
                <div className="modal fade" id="featureEditModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="editModalLabel">Edit Feature</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <form onSubmit={handleEditSubmit}>
                        <div className="modal-body">
                          <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input
                              type="text"
                              className="form-control"
                              name="features_title"
                              value={editfeatures.features_title}
                              onChange={handleEditFeature}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea
                              className="form-control"
                              name="features_description"
                              rows="4"
                              value={editfeatures.features_description}
                              onChange={handleEditFeature}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Icon URL</label>
                            <input
                              type="text"
                              className="form-control"
                              name="features_icon"
                              value={editfeatures.features_icon}
                              onChange={handleEditFeature}
                            />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            id="closeEditModalBtn"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button type="submit" className="btn btn-success">
                            Save Changes
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </AdminSidebar>
    </div>
  )
}

export default ManageFeaturesPage
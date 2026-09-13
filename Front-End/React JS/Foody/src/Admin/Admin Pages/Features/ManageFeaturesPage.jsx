import React, { useEffect } from 'react'
import AdminHeaderTitle from '../../Admin Common/AdminHeaderTitle'
import AdminHeader from '../../Admin Common/AdminHeader'
import useAPICall from '../../../Custom Hooks/useAPICall'
import AdminSidebar from '../../Admin Common/AdminSideBar'

function ManageFeaturesPage() {


  const { apidata, fetchAPIData } = useAPICall("http://localhost:3000/features")

  useEffect(() => {
    fetchAPIData()
  }, [])


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
                                >
                                  <i className="fa fa-eye"></i> View
                                </button>
                                <button
                                  className="btn btn-sm btn-outline-success"
                                  title="Edit"
                                >
                                  <i className="fa fa-pen"></i> Edit
                                </button>
                                <button
                                  className="btn btn-sm btn-outline-danger"
                                  title="Delete"
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

              </div>
            </div>
          </div>
        </div>
      </AdminSidebar>
    </div>
  )
}

export default ManageFeaturesPage
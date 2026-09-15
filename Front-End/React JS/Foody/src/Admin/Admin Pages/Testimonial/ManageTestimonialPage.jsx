import React, { useEffect, useState } from 'react'
import AdminHeader from '../../Admin Common/AdminHeader'
import AdminHeaderTitle from '../../Admin Common/AdminHeaderTitle'
import axios from 'axios'
import useAPICall from '../../../Custom Hooks/useAPICall'
import { data } from 'react-router-dom'
import AdminSidebar from '../../Admin Common/AdminSideBar'
import { toast } from 'react-toastify'

function ManageTestimonialPage() {

    const { apidata, fetchAPIData } = useAPICall("http://localhost:3000/testimonials")

    useEffect(() => {
        fetchAPIData()
    }, [])

    // View Single Testimonial
    const [testimonial, setTestimonial] = useState({
        testimonial_id: "",
        client_name: "",
        profession: "",
        quote: "",
        client_img: ""
    })

    const viewTestimonial = async (testimonial_id) => {
        try {
            const response = await axios.get(`http://localhost:3000/testimonials/${testimonial_id}`)
            setTestimonial(response.data)
        } catch (error) {
            toast.error("Internal Server Error : ", error)
        }
    }

    //Delete Selected Testimonial
    const deleteTestimonial = async (id) => {

        try {
            const deleteResponse = await axios.delete(`http://localhost:3000/testimonials/${id}`)
            toast.success("Testimonial Deleted Successfully..!!")
            fetchAPIData()
        } catch (error) {
            toast.error("Internal Server Error : ", error)
        }
    }

    //edit testimonial
    const [editTestimonial, setEditTestimonial] = useState({
        testimonial_id: "",
        client_name: "",
        profession: "",
        quote: "",
        client_img: ""
    })

    const editTestimonialData = (testimonial) => {
        //console.log(testimonial)
        setEditTestimonial(testimonial)
    }

    const handleEditChange = (e) => {
        setEditTestimonial({
            ...editTestimonial,
            [e.target.name]: e.target.value
        })
    }

    const handleEditSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:3000/testimonials/${editTestimonial.id}`, editTestimonial)
            fetchAPIData() // refresh table
            document.getElementById('closeEditModalBtn').click() // close modal programmatically
            toast.success("Testimonial Updated Successfully..!!")
        } catch (error) {
            toast.error("Internal Server Error : ", error)
        }
    }

    return (
        <div>
            {/* <AdminHeader /> */}
            <AdminSidebar>
                <AdminHeaderTitle title="Testimonials" name="Manage Testimonial" />

                <div className="container-fluid bg-light bg-icon py-6">
                    <div className="container">
                        <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                            <h1 className="display-5 mb-3">Manage Testimonials</h1>
                        </div>
                        <div className="row g-4">
                            <div className="container my-5">
                                <table className="table ">
                                    <thead className='table table-dark'>
                                        <tr className='text-center'>

                                            <th scope="col">Image</th>
                                            <th scope="col">Client Name</th>
                                            <th scope="col">Profession</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            apidata && apidata.map((testimonial, index) => {
                                                return (
                                                    <tr key={testimonial.testimonial_id} className="text-center">
                                                        {/* <th scope="row" className="fw-normal text-muted">#{testimonial.id}</th> */}
                                                        <td>
                                                            <img
                                                                src={testimonial.client_img}
                                                                alt={testimonial.client_name}
                                                                style={{
                                                                    width: "56px",
                                                                    height: "56px",
                                                                    borderRadius: "50%",
                                                                    objectFit: "cover",
                                                                    border: "1px solid #e5e7eb"
                                                                }}
                                                            />
                                                        </td>
                                                        <td className="fw-semibold">{testimonial.client_name}</td>
                                                        <td>
                                                            {testimonial.profession}
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-center gap-2">
                                                                <button
                                                                    className="btn btn-sm btn-outline-info"
                                                                    title="View"
                                                                    onClick={() => viewTestimonial(testimonial.id)}
                                                                    data-bs-toggle="modal" data-bs-target="#testimonialViewModal"
                                                                >
                                                                    <i className="fa fa-eye"></i> View
                                                                </button>
                                                                <button
                                                                    className="btn btn-sm btn-outline-success"
                                                                    title="Edit"
                                                                    onClick={() => editTestimonialData(testimonial)}
                                                                    data-bs-toggle="modal" data-bs-target="#testimonialEditModal"
                                                                >
                                                                    <i className="fa fa-pen"></i> Edit
                                                                </button>
                                                                <button
                                                                    className="btn btn-sm btn-outline-danger"
                                                                    title="Delete"
                                                                    onClick={() => deleteTestimonial(testimonial.id)}
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

                                {/* View Testimonial Modal */}
                                <div className="modal fade" id="testimonialViewModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">{testimonial.client_name}</h1>
                                            </div>
                                            <div className="modal-body d-flex justify-content-center">
                                                <div className="testimonial-item text-center" style={{ maxWidth: 320 }}>
                                                    <img
                                                        src={testimonial.client_img}
                                                        alt={testimonial.client_name}
                                                        style={{
                                                            width: "90px",
                                                            height: "90px",
                                                            borderRadius: "50%",
                                                            objectFit: "cover",
                                                            margin: "0 auto 16px"
                                                        }}
                                                    />
                                                    <p className="fst-italic">"{testimonial.quote}"</p>
                                                    <h5 className="mb-0">{testimonial.client_name}</h5>
                                                    <span className="text-muted">{testimonial.profession}</span>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Edit Testimonial Modal */}
                                <div className="modal fade" id="testimonialEditModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <form onSubmit={handleEditSubmit}>
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="editModalLabel">Edit Testimonial</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="mb-3">
                                                        <label className="form-label">Client Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="client_name"
                                                            value={editTestimonial.client_name}
                                                            onChange={handleEditChange}
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label">Profession</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="profession"
                                                            value={editTestimonial.profession}
                                                            onChange={handleEditChange}
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label">Quote</label>
                                                        <textarea
                                                            className="form-control"
                                                            name="quote"
                                                            rows="4"
                                                            value={editTestimonial.quote}
                                                            onChange={handleEditChange}
                                                        ></textarea>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label">Image URL</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="client_img"
                                                            value={editTestimonial.client_img}
                                                            onChange={handleEditChange}
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
                                                        Close
                                                    </button>
                                                    <button type="submit" className="btn btn-success">Save Changes</button>
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

export default ManageTestimonialPage
import React, { useEffect, useState } from 'react'
import AdminHeader from '../../Admin Common/AdminHeader'
import AdminHeaderTitle from '../../Admin Common/AdminHeaderTitle'
import axios from 'axios'
import useAPICall from '../../../Custom Hooks/useAPICall'
import { data } from 'react-router-dom'
import AdminSidebar from '../../Admin Common/AdminSideBar'

function ManageProductsPage() {

    // const [product, setproduct] = useState([])

    // useEffect(() => {
    //     fetchproduct()
    // }, [])

    // const fetchproduct = async () => {
    //     try {
    //         const res = await axios.get("http://localhost:3000/products")
    //         // console.log(res.data)
    //         setproduct(res.data)
    //     } catch (error) {
    //         console.log("product not found", error)
    //     }
    // }

    const { apidata, fetchAPIData } = useAPICall("http://localhost:3000/products")

    useEffect(() => {
        fetchAPIData()
    }, [])

    // View Single Product
    const [product, setProduct] = useState({
        product_id: "",
        product_name: "",
        product_price: "",
        product_category: "",
        product_img: ""
    })

    const viewProduct = async (product_id) => {
        try {
            const response = await axios.get(`http://localhost:3000/products/${product_id}`)
            setProduct(response.data)
        } catch (error) {
            console.log("API Error : ", error)
        }
    }

    //Delete Selected Product
    const deleteProduct = async (id) => {

        try {
            const deleteResponse = await axios.delete(`http://localhost:3000/products/${id}`)
            console.log(deleteResponse.data)
            fetchAPIData()
        } catch (error) {

        }
    }

    //edit product
    const [editproduct, setEditProduct] = useState({
        product_id: "",
        product_name: "",
        product_price: "",
        product_category: "",
        product_img: ""
    })

    const editProduct = (product) => {
        //console.log(product)
        setEditProduct(product)
    }

    const handleEditChange = (e) => {
        setEditProduct({
            ...editproduct,
            [e.target.name]: e.target.value
        })
    }

    const handleEditSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:3000/products/${editproduct.id}`, editproduct)
            fetchAPIData() // refresh table
            document.getElementById('closeEditModalBtn').click() // close modal programmatically
        } catch (error) {
            console.log("Error updating product:", error)
        }
    }

    return (
        <div>
            {/* <AdminHeader /> */}
            <AdminSidebar>
                <AdminHeaderTitle title="Products" name="Manage Products" />

                <div className="container-fluid bg-light bg-icon py-6">
                    <div className="container">
                        <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                            <h1 className="display-5 mb-3">Manage Prodcuts</h1>
                        </div>
                        <div className="row g-4">
                            <div className="container my-5">
                                <table className="table ">
                                    <thead className='table table-dark'>
                                        <tr className='text-center'>

                                            <th scope="col">Image</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            apidata && apidata.map((product, index) => {
                                                return (
                                                    <tr key={product.product_id} className="text-center">
                                                        {/* <th scope="row" className="fw-normal text-muted">#{product.id}</th> */}
                                                        <td>
                                                            <img
                                                                src={product.product_img}
                                                                alt={product.product_name}
                                                                style={{
                                                                    width: "56px",
                                                                    height: "56px",
                                                                    borderRadius: "10px",
                                                                    objectFit: "cover",
                                                                    border: "1px solid #e5e7eb"
                                                                }}
                                                            />
                                                        </td>
                                                        <td className="fw-semibold">{product.product_name}</td>
                                                        <td>
                                                            {product.product_category}
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-center gap-2">
                                                                <button
                                                                    className="btn btn-sm btn-outline-info"
                                                                    title="View"
                                                                    onClick={() => viewProduct(product.id)}
                                                                    data-bs-toggle="modal" data-bs-target="#prodcutViewModal"
                                                                >
                                                                    <i className="fa fa-eye"></i> View
                                                                </button>
                                                                <button
                                                                    className="btn btn-sm btn-outline-success"
                                                                    title="Edit"
                                                                    onClick={() => editProduct(product)}
                                                                    data-bs-toggle="modal" data-bs-target="#productEditModal"
                                                                >
                                                                    <i className="fa fa-pen"></i> Edit
                                                                </button>
                                                                <button
                                                                    className="btn btn-sm btn-outline-danger"
                                                                    title="Delete"
                                                                    onClick={() => deleteProduct(product.id)}
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

                                {/* View Product Modal */}
                                <div className="modal fade" id="prodcutViewModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">{product.product_name}</h1>
                                            </div>
                                            <div className="modal-body d-flex justify-content-center">
                                                <div className="product-item" style={{ maxWidth: 260 }}>
                                                    <div className="position-relative bg-light overflow-hidden rounded">
                                                        <img
                                                            className="img-fluid w-100"
                                                            style={{ height: 200, objectFit: 'cover' }}
                                                            src={product.product_img}
                                                            alt={product.product_name}
                                                        />
                                                        <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-2 py-1 px-2 small">
                                                            {product.product_category}
                                                        </div>
                                                    </div>
                                                    <div className="text-center p-4">
                                                        <a className="d-block h5 mb-2" href="#">{product.product_name}</a>
                                                        <span className="text-primary me-1">${product.product_price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Edit Product Modal */}
                                <div className="modal fade" id="productEditModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <form onSubmit={handleEditSubmit}>
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="editModalLabel">Edit Product</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="mb-3 text-center">
                                                        <img
                                                            src={editproduct.product_img}
                                                            alt={editproduct.product_name}
                                                            style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 10 }}
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label">Product Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="product_name"
                                                            value={editproduct.product_name}
                                                            onChange={handleEditChange}
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label">Category</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="product_category"
                                                            value={editproduct.product_category}
                                                            onChange={handleEditChange}
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label">Price</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            name="product_price"
                                                            value={editproduct.product_price}
                                                            onChange={handleEditChange}
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label">Image URL</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="product_img"
                                                            value={editproduct.product_img}
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

export default ManageProductsPage
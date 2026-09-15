import React, { useEffect, useState } from 'react'
import AdminHeader from '../../Admin Common/AdminHeader'
import AdminHeaderTitle from '../../Admin Common/AdminHeaderTitle'
import useAPICall from '../../../Custom Hooks/useAPICall'
import AdminSidebar from '../../Admin Common/AdminSideBar'
import { data } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function ManageBlogPage() {

  const { apidata, fetchAPIData } = useAPICall("http://localhost:3000/blogs")

  useEffect(() => {
    fetchAPIData()
  }, [])

  //view single blog
  const [blog, setBlog] = useState({
    blog_id: "",
    blog_title: "",
    blog_author: "",
    blog_date: "",
    blog_img: ""
  })

  const viewBlog = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/blogs/${id}`)
      setBlog(response.data)
    } catch (error) {
      toast.error("Internal Server Error : ", error)
    }
  }

  //delete
  const deleteBlog = async (id) => {
    try {
      const deleteResponse = await axios.delete(`http://localhost:3000/blogs/${id}`)
      toast.success("Blog Deleted Successfully..!!")
      fetchAPIData()
    } catch (error) {
      toast.error("Internal Server Error : ", error)
    }
  }

  //edit
  const [editblog, setEditBlog] = useState({
    blog_id: "",
    blog_title: "",
    blog_author: "",
    blog_date: "",
    blog_img: ""
  })

  const editBlog = (blog) => {
    setEditBlog(blog)
  }

  const handleEditBlog = (event) => {
    setEditBlog({
      ...editblog,
      [event.target.name]: event.target.value
    })
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:3000/blogs/${editblog.id}`, editblog)
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
        <AdminHeaderTitle title="Manage Blogs" name="Manage Blog" />


        <div className="container-fluid bg-light bg-icon py-6">
          <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
              <h1 className="display-5 mb-3">Manage Blog</h1>
            </div>
            <div className="row g-4">
              <div className="container my-5">
                <table className="table ">
                  <thead className='table table-dark'>
                    <tr className='text-center'>
                      <th scope="col">Image</th>
                      <th scope="col">Title</th>
                      <th scope="col">Author</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      apidata && apidata.map((blog, index) => {
                        return (
                          <tr key={blog.blog_id} className="text-center">
                            {/* <th scope="row" className="fw-normal text-muted">#{blog.id}</th> */}
                            <td>
                              <img
                                src={blog.blog_img}
                                alt={blog.blog_title}
                                style={{
                                  width: "56px",
                                  height: "56px",
                                  borderRadius: "10px",
                                  objectFit: "cover",
                                  border: "1px solid #e5e7eb"
                                }}
                              />
                            </td>
                            <td className="fw-semibold">{blog.blog_title}</td>
                            <td className="fw-semibold">{blog.blog_author}</td>
                            <td>
                              <div className="d-flex justify-content-center gap-2">
                                <button
                                  className="btn btn-sm btn-outline-info"
                                  title="View"
                                  onClick={() => viewBlog(blog.id)}
                                  data-bs-toggle="modal" data-bs-target="#blogViewModal"
                                >
                                  <i className="fa fa-eye"></i> View
                                </button>
                                <button
                                  className="btn btn-sm btn-outline-success"
                                  title="Edit"
                                  onClick={() => editBlog(blog)}
                                  data-bs-toggle="modal" data-bs-target="#blogEditModal"

                                >
                                  <i className="fa fa-pen"></i> Edit
                                </button>
                                <button
                                  className="btn btn-sm btn-outline-danger"
                                  title="Delete"
                                  onClick={() => deleteBlog(blog.id)}
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
                <div className="modal fade" id="blogViewModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Blog Preview</h1>
                      </div>
                      <div className="modal-body">
                        <div className="blog-item bg-light rounded overflow-hidden shadow-sm">
                          <div className="blog-img" style={{ height: 250, overflow: 'hidden' }}>
                            <img
                              className="img-fluid w-100 h-100"
                              style={{ objectFit: 'cover' }}
                              src={blog.blog_img}
                              alt={blog.blog_title || 'Blog image'}
                            />
                          </div>
                          <div className="p-4">
                            <a className="d-block h5 lh-base mb-4" href={`/blog/${blog.id}`}>
                              {blog.blog_title}
                            </a>
                            <div className="text-muted border-top pt-4">
                              <small className="me-3">
                                <i className="fa fa-user text-primary me-2" />{blog.blog_author}
                              </small>
                              <small className="me-3">
                                <i className="fa fa-calendar text-primary me-2" />{blog.blog_date}
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Edit blog Modal */}
                <div className="modal fade" id="blogEditModal" tabIndex="-1" aria-labelledby="blogEditModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="blogEditModalLabel">Edit Blog</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>

                      <form onSubmit={handleEditSubmit}>
                        <div className="modal-body">
                          <div className="mb-3">
                            <label className="form-label fw-semibold">
                              <i className="fa fa-heading text-primary me-2" />Title
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="blog_title"
                              value={editblog.blog_title}
                              onChange={handleEditBlog}
                              required
                            />
                          </div>

                          <div className="mb-3">
                            <label className="form-label fw-semibold">
                              <i className="fa fa-user text-primary me-2" />Author
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="blog_author"
                              value={editblog.blog_author}
                              onChange={handleEditBlog}
                              required
                            />
                          </div>

                          <div className="mb-3">
                            <label className="form-label fw-semibold">
                              <i className="fa fa-calendar text-primary me-2" />Date
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              name="blog_date"
                              value={editblog.blog_date}
                              onChange={handleEditBlog}
                              required
                            />
                          </div>

                          <div className="mb-3">
                            <label className="form-label fw-semibold">
                              <i className="fa fa-image text-primary me-2" />Image URL
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="blog_img"
                              value={editblog.blog_img}
                              onChange={handleEditBlog}
                              required
                            />
                          </div>

                        </div>

                        <div className="modal-footer">
                          <button type="button" id="closeEditModalBtn" className="btn btn-secondary" data-bs-dismiss="modal">
                            Cancel
                          </button>
                          <button type="submit" className="btn btn-primary">
                            <i className="fa fa-save me-2" />Save Changes
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

export default ManageBlogPage
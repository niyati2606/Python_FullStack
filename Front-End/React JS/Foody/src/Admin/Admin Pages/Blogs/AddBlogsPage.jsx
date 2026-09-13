import React, { useState } from 'react'
import AdminHeader from '../../Admin Common/AdminHeader'
import AdminHeaderTitle from '../../Admin Common/AdminHeaderTitle'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import AdminSidebar from '../../Admin Common/AdminSideBar'

function AddBlogsPage() {

  const redirect = useNavigate()

  const [blog, setBlog] = useState({
    blog_id: "",
    blog_title: "",
    blog_author: "",
    blog_date: "",
    blog_img: ""
  })

  const getBlogData = (event) => {
    setBlog({
      ...blog,
      blog_id: new Date().getTime().toString(),
      [event.target.name]: event.target.value
    })

    console.log(blog)
  }

  const addBlogData = async (event) => {
    event.preventDefault()

    try {

      if (blog.blog_title == "" || blog.blog_img == "" || blog.blog_author == "") {
        alert("Please fill require details..!!")
      } else {

        const addFeatureResponse = await axios.post("http://localhost:3000/blogs", blog)
        console.log(addFeatureResponse.data)

        setBlog({
          blog_id: "",
          blog_title: "",
          blog_author: "",
          blog_date: "",
          blog_img: ""
        })

        redirect("/manageblogs")
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
        <AdminHeaderTitle title="Add Blog" name="Add Blog" />

        <div className="container-fluid bg-light bg-icon py-6">
          <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
              <h1 className="display-5 mb-3">Add blog</h1>
            </div>
            <div className="col col-md-12 wow fadeInUp" data-wow-delay="0.5s">
              <form onSubmit={addBlogData}>
                <div className="row g-3">
                  <div className="col">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" name='blog_title' onChange={getBlogData} value={blog.blog_title} placeholder="Blog Name" />
                      <label htmlFor="name">Blog Name</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="imgURL" name='blog_img' onChange={getBlogData} value={blog.blog_img} placeholder="Blog Image URL" />
                      <label htmlFor="imgURL">Blog Image URL</label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-floating">
                      <input type='text' className="form-control" placeholder="Blog Author" name='blog_author' onChange={getBlogData} value={blog.blog_author} id="authorname" defaultValue={""} />
                      <label htmlFor="author">Blog Author</label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-floating">
                      <input type='date' className="form-control" placeholder="Blog Date" name='blog_date' onChange={getBlogData} value={blog.blog_date} id="blogdate" defaultValue={""} />
                      <label htmlFor="description">Blog Date</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Add Blog</button>
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

export default AddBlogsPage
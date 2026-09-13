import React, { useEffect } from 'react'
import Header from '../Common/Header'
import HeadetTitle from '../Common/HeadetTitle'
import Footer from '../Common/Footer'
import useAPICall from '../../Custom Hooks/useAPICall'

function BlogPage() {

  const { apidata, fetchAPIData } = useAPICall("http://localhost:3000/blogs")

  useEffect(() => {
    fetchAPIData()
  }, [])

  return (
    <div>
      <Header />
      <HeadetTitle name="Blog" title="Blog Grid" />
      {/* Blog Start */}
      <div className="container-xxl py-6">
        <div className="container">
          <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
            <h1 className="display-5 mb-3">Latest Blog</h1>
            <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
          </div>
          {/* <div className="row g-4">
            {
              apidata && apidata.map((blogs, index) => {
                return (
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                    <img className="img-fluid" src={blogs.blog_img} alt />
                    <div className="bg-light p-4">
                      <a className="d-block h5 lh-base mb-4" href>{blogs.blog_title}</a>
                      <div className="text-muted border-top pt-4">
                        <small className="me-3"><i className="fa fa-user text-primary me-2" />{blogs.blog_author}</small>
                        <small className="me-3"><i className="fa fa-calendar text-primary me-2" />{blogs.blog_date}</small>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
              <a className="btn btn-primary rounded-pill py-3 px-5" href>Load More</a>
            </div>
          </div> */}
          <div className="row g-4">
            {
              apidata && apidata.map((blog, index) => {
                return (
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={blog.id ?? index}>
                    <div className="blog-item bg-light rounded overflow-hidden shadow-sm h-100">
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
                )
              })
            }
            <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
              <a className="btn btn-primary rounded-pill py-3 px-5" href="/blog">Load More</a>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End */}

      <Footer />
    </div>
  )
}

export default BlogPage
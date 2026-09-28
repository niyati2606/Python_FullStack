import React, { useState } from 'react'
import AdminHeaderTitle from '../../Admin Common/AdminHeaderTitle'
import AdminHeader from '../../Admin Common/AdminHeader'
import AdminSidebar from '../../Admin Common/AdminSideBar'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

function AddTestimonialPage() {

  const redirect = useNavigate()

  const [testimonial, setTestimonial] = useState({
    testimonial_id: "",
    client_name: "",
    profession: "",
    quote: "",
    client_img: ""
  })

  const getTestimonialData = (event) => {
    setTestimonial({
      ...testimonial,
      testimonial_id: new Date().getTime().toString(),
      [event.target.name]: event.target.value
    })
  }

  const addTestimonialData = async (event) => {
    event.preventDefault()
   
    try {
      if (testimonial.client_name == "" || testimonial.profession == "" || testimonial.client_img == "" || testimonial.quote == "") {
        toast.error("Please fill all Details")
      } else {
        const addTestimonialResponse = await axios.post("http://localhost:3000/testimonials", testimonial)
        console.log(addTestimonialResponse.data)
        setTestimonial({
          testimonial_id: "",
          client_name: "",
          profession: "",
          quote: "",
          client_img: ""
        })
        redirect("/managetestimonial")
        toast.success("Testimonial Added Successfully...!!!")
      }
    } catch (error) {
      toast.error("Internal Server Error : ", error)
    }
  }


  return (
    <div>
      <AdminSidebar>
        <AdminHeaderTitle title="Add Testimonial" name="Add" />

        <div className="container-fluid bg-light bg-icon py-6">
          <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
              <h1 className="display-5 mb-3">Add Testimonial</h1>
            </div>


            <div className="col col-md-12 wow fadeInUp" data-wow-delay="0.5s">
              <form onSubmit={addTestimonialData}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" onChange={getTestimonialData} value={testimonial.client_name} id="name" name='client_name' placeholder="Client Name" />
                      <label htmlFor="name">Client Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="price" className="form-control" id="price" onChange={getTestimonialData} value={testimonial.profession} name='profession' placeholder="Profession" />
                      <label htmlFor="price">Profession</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="url" className="form-control" id="productURL" onChange={getTestimonialData} value={testimonial.client_img} name='client_img' placeholder="Client Image URL" />
                      <label htmlFor="productURL">Client Image URL</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" onChange={getTestimonialData} value={testimonial.quote} name='quote' placeholder="Enter Quote" id="quote" style={{ height: 100 }} defaultValue={""} />
                      <label htmlFor="message">Client Quote</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Add Testimonial</button>
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

export default AddTestimonialPage
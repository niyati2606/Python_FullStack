import React, { useState } from 'react'
import AdminHeader from '../../Admin Common/AdminHeader'
import AdminHeaderTitle from '../../Admin Common/AdminHeaderTitle'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AdminSidebar from '../../Admin Common/AdminSideBar'

function AddProductPage() {

  const redirect = useNavigate()

  const [product, setProduct] = useState({
    product_id: "",
    product_name: "",
    product_price: "",
    product_category: "",
    product_img: ""
  })

  const getProductData = (event) => {
    setProduct({
      ...product,
      product_id: new Date().getTime().toString(),
      [event.target.name]: event.target.value
    })

    console.log(product)
  }


  const addProductData = async (event) => {
    event.preventDefault()
    console.log(product)

    try {
      if (product.product_name == "" || product.product_price == "" || product.product_img == "" || product.product_category == "") {
        alert("Please Add All Details")
      } else {

        const addProductResponse = await axios.post("http://localhost:3000/products", product)
        console.log(addProductResponse.data)
        setProduct({
          product_id: "",
          product_name: "",
          product_price: "",
          product_category: "",
          product_img: ""
        })

        redirect("/manageproducts")
        console.log("Product Added Successfully...!!!")
      }
    } catch (error) {
      console.log("Api Error : ", error)
    }
  }


  return (
    <div>
      {/* <AdminHeader /> */}
      <AdminSidebar>
        <AdminHeaderTitle title="Add Product" name="Add" />

        <div className="container-fluid bg-light bg-icon py-6">
          <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
              <h1 className="display-5 mb-3">Add Prodcuts</h1>
            </div>

            <div className="col col-md-12 wow fadeInUp" data-wow-delay="0.5s">
              <form onSubmit={addProductData}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" onChange={getProductData} value={product.product_name} id="name" name='product_name' placeholder="Prodcut Name" />
                      <label htmlFor="name">Prodcut Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="price" className="form-control" id="price" onChange={getProductData} value={product.product_price} name='product_price' placeholder="Prodcut Price" />
                      <label htmlFor="price">Prodcut Price</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="url" className="form-control" id="productURL" onChange={getProductData} value={product.product_img} name='product_img' placeholder="Prodcut Image URL" />
                      <label htmlFor="productURL">Prodcut Image URL</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <select class="form-select" id="floatingSelect" onChange={getProductData} value={product.product_category} name='product_category' aria-label="Select Category">
                        <option hidden>Select Category</option>
                        <option value="vegetables">Vegetables</option>
                        <option value="fruits">Fruits</option>
                      </select>
                      <label for="floatingSelect">Select Category</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Add Product</button>
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

export default AddProductPage
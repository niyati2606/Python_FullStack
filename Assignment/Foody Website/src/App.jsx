import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Slide, ToastContainer, toast } from 'react-toastify'
import HomePage from './User/Pages/HomePage'
import AboutUsPage from './User/Pages/AboutUsPage'
import ProductPage from './User/Pages/ProductPage'
import NotFound from './User/Common/NotFound'
import BlogPage from './User/Pages/BlogPage'
import FeaturePage from './User/Pages/FeaturePage'
import TestimonialPage from './User/Pages/TestimonialPage'
import ContactUsPage from './User/Pages/ContactUsPage'
import AdminHomePage from './Admin/Admin Pages/AdminHomePage'
import ManageProductsPage from './Admin/Admin Pages/Product/ManageProductsPage'
import AddProductPage from './Admin/Admin Pages/Product/AddProductPage'
import AddFeaturesPage from './Admin/Admin Pages/Features/AddFeaturesPage'
import ManageBlogPage from './Admin/Admin Pages/Blogs/ManageBlogPage'
import ManageFeaturesPage from './Admin/Admin Pages/Features/ManageFeaturesPage'
import AddBlogsPage from './Admin/Admin Pages/Blogs/AddBlogsPage'
import AdminAboutUsPage from './Admin/Admin Pages/AdminAboutUsPage'
import ManageTestimonialPage from './Admin/Admin Pages/Testimonial/ManageTestimonialPage'
import AddTestimonialPage from './Admin/Admin Pages/Testimonial/AddTestimonialPage'
import AdminLoginPage from './Admin/Admin Pages/AdminLoginPage'
import LoginPage from './User/Pages/LoginPage'
import SignupPage from './User/Pages/SignupPage'
import EditProfilePage from './User/Pages/EditProfilePage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutUsPage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/feature' element={<FeaturePage />} />
          <Route path='/testimonial' element={<TestimonialPage />} />
          <Route path='/contact' element={<ContactUsPage />} />
          <Route path='/userlogin' element={<LoginPage />} />
          <Route path='/userSignup' element={<SignupPage />}/>
          <Route path='/editProfile' element={<EditProfilePage/>}/>

          <Route path='*' element={<NotFound />} />

          <Route path='/adminlogin' element={<AdminLoginPage />} />
          <Route path='/admindashboard' element={<AdminHomePage />} />
          <Route path='/adminaboutus' element={<AdminAboutUsPage />} />
          <Route path='/manageproducts' element={<ManageProductsPage />} />
          <Route path='/addproducts' element={<AddProductPage />} />
          <Route path='/manageblogs' element={<ManageBlogPage />} />
          <Route path='/addblogs' element={<AddBlogsPage />} />
          <Route path='/managefeatures' element={<ManageFeaturesPage />} />
          <Route path='/addfeatures' element={<AddFeaturesPage />} />
          <Route path='/managetestimonial' element={<ManageTestimonialPage />} />
          <Route path='/addtestimonial' element={<AddTestimonialPage />} />

        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  )
}

export default App
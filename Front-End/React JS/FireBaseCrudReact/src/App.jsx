import React from 'react'
import ProductlistComponent from './Component/ProductlistComponent'
import AddProductComponent from './Component/AddProductComponent'
import EditProductComponent from './Component/EditProductComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductContext from './Context/ProductContext'
import { Slide, ToastContainer, toast } from 'react-toastify'
import LoginComponent from './Component/LoginComponent'
import SignUpComponent from './Component/SignUpComponent'
import UsersContext from './Context/UserContext'

function App() {
  return (
    <div>
      <ProductContext>
        <UsersContext>
          <BrowserRouter>
            <Routes>
              <Route path='/login' element={<LoginComponent />} />
              <Route path='/signup' element={< SignUpComponent />} />
              <Route path='/' element={<ProductlistComponent />} />
              <Route path='/addproduct' element={<AddProductComponent />} />
              <Route path='/updateproduct' element={<EditProductComponent />} />
            </Routes>
          </BrowserRouter>
        </UsersContext>
      </ProductContext>

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
import { useState } from 'react'
import HomeComponent from './Component/HomeComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DataListComponent from './Component/DataListComponent'
import CounterComponent from './Component/CounterComponent'
import LoginComponent from './Component/LoginComponent'
import ProductsComponent from './Component/ProductsComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/fetchdata' element={<DataListComponent />} />
          <Route path='/counter' element={<CounterComponent />} />
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/products' element={<ProductsComponent/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

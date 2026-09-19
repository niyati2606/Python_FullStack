import React from 'react'
import MainCard from './Component/MainCard'
import LikeCounter from './Component/LikeCounter'
import MainContext from './Context/MainContext'
import ProductList from './CustomHook/ProductList'

function App() {
  return (
    <div>
        {/* <MainCard /> */}
        {/* <LikeCounter /> */}
        {/* <MainContext /> */}
        <ProductList />
    </div>
  )
}

export default App
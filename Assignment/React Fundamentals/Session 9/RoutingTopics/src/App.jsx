import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CartPageComponent from "./Component/CartPageComponent"
import HomePageComponent from "./Component/HomePageComponent"
import DealsPageComponent from "./Component/DealsPageComponent"
import NotFoundPage from "./Component/NotFoundPage"
import NavBarComponenet from "./Component/Common/NavBarComponenet"

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBarComponenet />
        <Routes>
          <Route path="/" element={<HomePageComponent />} />
          <Route path="/cart" element={<CartPageComponent />} />
          <Route path="/deals" element={<DealsPageComponent />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

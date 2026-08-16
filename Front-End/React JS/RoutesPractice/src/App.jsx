import React from "react"
import NavBarComponenet from "./Common/NavBarComponenet"
import AboutUsComponent from "./Component/AboutUsComponent"
import ContactComponent from "./Component/ContactComponent"
import HomeComponent from "./Component/HomeComponent"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutComponent1 from "./Component/AboutComponent1"
import AboutComponent2 from "./Component/AboutComponent2"
import FotterComponenet from "./Common/FotterComponenet"

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBarComponenet />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/aboutus" element={<AboutUsComponent />} >
            <Route path="about1" element={<AboutComponent1 />} />
            <Route path="about2" element={<AboutComponent2 />} />
          </Route>
          <Route path="/contact" element={<ContactComponent />} />
        </Routes>
        <FotterComponenet />
      </BrowserRouter>
    </div>
  )
}

export default App

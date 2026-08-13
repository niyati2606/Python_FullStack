import React from "react"
import ClassComponenet from "./Component/ClassComponenet"
import FunctionComponent from "./Component/FunctionComponent"
import DemoCSS from "./CSS/DemoCSS"
import MainState from "./State/MainState"
import MainProps from "./Props/MainProps"
import FunctionComponentState from "./useState/FunctionComponentState"
import UseEffectIntro from "./useEffect/UseEffectIntro"
import FetchUseEffect from "./useEffect/FetchUseEffect"
import AxiosUserData from "./useEffect/AxiosUserData"

function App() {

  return (
    // <h1>Vitr</h1>
    <>
      {/* Class and Function Componenet */}
      {/* <ClassComponenet/>
      <FunctionComponent /> */}

      {/* CSS */}
      {/* <DemoCSS /> */}

      {/* Class State */}
      {/* <MainState /> */}

      {/* Function State - useState */}
      {/* <FunctionComponentState/> */}

      {/* Props */}
      {/* <MainProps /> */}

      {/* useEffect */}
      {/* <UseEffectIntro /> */}
      {/* <FetchUseEffect /> */}
      <AxiosUserData />
    </>
  )
}

export default App

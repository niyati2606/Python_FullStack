import React from 'react'
import CouterComponent from './Component/Count/CouterComponent'
import CounterTwoComponent from './Component/Count/CounterTwoComponent'
import CounterThree from './Component/Count/CounterThree'
import AddTODO from './Component/TODO/AddTODO'
import NameList from './Component/TODO/NameList'

function App() {
  return (
    <div>
      {/* <CouterComponent />
      <CounterTwoComponent />
      <CounterThree /> */}
      <NameList />
      <AddTODO />
    </div>
  )
}

export default App
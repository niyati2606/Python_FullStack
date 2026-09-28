/* 
    countValue : initial state name
    userDetails : slice name which we declare in slice name part
*/  

import React from 'react'
import { useSelector } from 'react-redux'

function UserDetailsComponent() {

    //const slicename(declared in slice name) = useSelector((state) => state.value (initalvalue name))
    const {countValue} = useSelector((state) => state.userDetails)
    console.log(countValue)

  return (
    <div>UserDetailsComponent</div>
  )
}

export default UserDetailsComponent
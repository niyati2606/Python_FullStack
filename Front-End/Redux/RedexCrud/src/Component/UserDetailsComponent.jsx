/* 
    countValue : initial state name
    userDetails : slice name which we declare in slice name part
*/  

import React from 'react'
import { useSelector } from 'react-redux'

function UserDetailsComponent() {

    //const initial value name(declared slice) = useSelector((state) => state.value (slice name given by us in store))
    const {countValue} = useSelector((state) => state.user)
 
  return (
    <div>UserDetailsComponent</div>
  )
}

export default UserDetailsComponent
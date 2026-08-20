import React from 'react'
import UserProfileComponent from './USerProfileComponent'

function MiniProfileComponent() {
  return (
    <div>
        <UserProfileComponent userName={"niya26"} profileImage={"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"} followers={"1000"}/>

        <UserProfileComponent userName={"niya26"}/>
    </div>
  )
}

export default MiniProfileComponent
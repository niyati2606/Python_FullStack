import { useState } from 'react'
import LikeButtonComponent from './Component/LikeButtonComponent'
import CartComponent from './Component/CartComponent'
import SongVoteComponent from './Component/SongVoteComponent'
import RatingComponent from './Component/RatingComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <LikeButtonComponent /> */}
      {/* <CartComponent /> */}
      {/* <SongVoteComponent /> */}
      <RatingComponent />
    </div>
  )
}

export default App

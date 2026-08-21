import { useState } from 'react'
import PlaylistComponent from './Component/PlayList/PlaylistComponent'
import PlaylistListComponent from './Component/PlayList/PlaylistListComponent'
import OrdersComponent from './Component/Order/OrdersComponent'
import Followers from './Component/Followers/Followers'
import CartSummaryComponent from './Component/Cart/CartSummaryComponent'

function App() {

  return (
    <div>
      {/* <PlaylistListComponent /> */}
      {/* <OrdersComponent /> */}
      {/* <Followers /> */}
      <CartSummaryComponent />
    </div>
  )
}

export default App

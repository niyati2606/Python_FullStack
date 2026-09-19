import React from 'react'
import { ThemeProvider } from './Context/ThemeContext'
import Header from './Component/Header'
import MainCard from './Component/MainCard'
import { AuthProvider } from './Context/AuthContext'
import Profile from './Component/Profile'
import { CartProvider } from './Component/CartContext'

function App() {
  return (
    <div>
      {/* <ThemeProvider>
        <Header />
      </ThemeProvider> */}
      {/* <MainCard /> */}

      <AuthProvider>
        <Header />

        <div className="container mt-5">
          <Profile />
        </div>
      </AuthProvider>
      {/* <CartProvider /> */}
    </div>
  )
}

export default App
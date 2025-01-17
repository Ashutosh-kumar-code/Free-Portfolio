import { useState } from 'react'

import './App.css'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Navbar from './layout/Navbar'
// import Footer from './layout/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
         
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>

    </>
  )
}

export default App

import { useState } from 'react'
import './index.css'
import './App.css'
import './style.scss'
import Home from './pages/Home'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/aboutus" element={<AboutUs />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

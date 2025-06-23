import { useState } from 'react'
import './index.css'
import './App.css'
import './style.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Home from './pages/Home'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { WebDevelopment } from './pages/Services'
import { OurPortfolio, Portfolio } from './pages/Portfolio'
import MobArchieves from './pages/MobileArchieves/MobArchieves'
import SoftwareDevelopmentPage from './pages/SoftwareDevelopment/SoftwareDevelopmentPage'
import DigitalMarketing from './pages/DigitalMarketing/DigitalMarketing'
import Travelica from './pages/MobileArchieves/Travelica'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/web-development" element={<WebDevelopment />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/our-portfolio" element={<OurPortfolio />} />
        <Route path="/mob-archieves" element={<MobArchieves />} />
        <Route path="/mob-archieves/travelica" element={<Travelica />} />
        <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        {/* <Route path="/aboutus" element={<AboutUs />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'


import Wardrobe from './pages.jsx/Wardrobe'
import MensStyle from './pages.jsx/MensStyle'
import ClothingCare from './pages.jsx/ClothingCare'
import SizeGuide from './pages.jsx/SizeGuide'

import './App.css'

import Home from './pages.jsx/Home'
import Shop from './pages.jsx/Shop'
import StyleHub from './pages.jsx/StyleHub'
import About from './pages.jsx/About'
import Contact from './pages.jsx/Contact'

import Navbar from './Navbar'



export default function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Shop" element={<Shop />} />

          <Route path="/stylehub" element={<StyleHub />} >

            <Route path="size-guide" element={<SizeGuide />} />
            <Route path="wardrobe" element={<Wardrobe />} />
            <Route path="mens-style" element={<MensStyle />} />
            <Route path="clothing-care" element={<ClothingCare />} />

          </Route>
          

          <Route path="/About" element={<About />} />
          
          <Route path="/Contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

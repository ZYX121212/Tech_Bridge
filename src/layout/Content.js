import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Talents from '../pages/Talents'
import JoinUs from '../pages/JoinUs'
import Investments from '../pages/Investments'
import Tb from "../pages/Tb"
import Projects from '../pages/Projects'

export default function Content() {
  return (
    <div>
      <Routes>
        <Route path='/tb' element={<Tb></Tb>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/talents' element={<Talents></Talents>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/joinUs' element={<JoinUs></JoinUs>}></Route>
        <Route path='/investments' element={<Investments></Investments>}></Route>
      </Routes>
    </div>
  )
}

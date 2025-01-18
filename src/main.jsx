import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import Level from './pages/Level.jsx'
import Onboarding from './pages/Onboarding.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='levels/:levelId' element={<Level />}></Route>
      <Route path='/onboarding' element={<Onboarding />}></Route>
    </Routes>
  </BrowserRouter>
)

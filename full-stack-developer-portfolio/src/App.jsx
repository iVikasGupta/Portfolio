import React from 'react'
import {Routes,Route} from 'react-router-dom'
import ContactMe from './Pages/ContactMe'
import About from './Pages/About'
import Services from './Pages/Services'
import Projects from './Pages/Projects'
import Home from './Pages/Home/Home'
  

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<ContactMe/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
    </>
  )
}

export default App


/*
#C5FFF8
#96EFFF
#5FBDFF
#7B66FF
*/
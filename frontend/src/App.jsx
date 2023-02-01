import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormUpload from './pages/FormUpload'
import MultiImage from './pages/MultiImage'
import Navbar from './pages/Navbar'

const App = () => {
  return (<BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<h1>Home Page</h1>} />
      <Route path='/multilmage' element={<MultiImage />} />
      <Route path='/formupload' element={<FormUpload />} />
      <Route path='*' element={<h1>Page Not Found</h1>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
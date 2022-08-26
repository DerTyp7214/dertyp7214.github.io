import React from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  return <>
    <Routes>
      <Route path='/' element={<>Hi</>} />
      <Route path='about' element={<>Rboard Homepage</>} />
    </Routes>
  </>
}

export default App

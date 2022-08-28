import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Apps from './pages/apps/Apps'

const App = () => {
    return <>
        <Routes>
            <Route path='*' element={<>404</>} />
            <Route path='/' element={<>Hi</>} />
            <Route path='apps' element={<Apps />}>
                <Route path=':appId' element={<Box sx={{ background: 'green' }}></Box>} />
            </Route>
            <Route path='about' element={<>Rboard Homepage</>} />
        </Routes>
    </>
}

export default App

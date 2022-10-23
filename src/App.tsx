import { createTheme, ThemeProvider } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import AppList from './pages/apps/AppList'
import Apps from './pages/apps/Apps'
import RboardIMETester from './pages/apps/RboardIMETester'
import RboardManager from './pages/apps/RboardManager'
import PathViewer from './PathViewer'

const App = () => {
    return <>
        <ThemeProvider theme={createTheme({
            palette: {
                mode: 'dark',
                primary: {
                    main: '#FFF'
                }
            }
        })}>
            <PathViewer />
            <Routes>
                <Route path='*' element={<>404</>} />
                <Route path='/' element={<>Hallo</>} />
                <Route path='apps' element={<Apps />}>
                    <Route path='rboardManager' element={<RboardManager />} />
                    <Route path='rboardImeTester' element={<RboardIMETester />} />
                    <Route path='' element={<AppList />} />
                </Route>
                <Route path='about' element={<>Rboard Homepage</>} />
            </Routes>
        </ThemeProvider>
    </>
}

export default App

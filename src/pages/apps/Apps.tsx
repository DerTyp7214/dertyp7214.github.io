import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

const Apps = () => {
    return <Box>
        <Outlet />
    </Box>
}

export default Apps
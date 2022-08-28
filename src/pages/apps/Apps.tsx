import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"

const Apps = () => {
    return <Box sx={{ background: 'red' }}>
        <Outlet />
    </Box>
}

export default Apps
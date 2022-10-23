/* eslint-disable no-restricted-globals */

import { ChevronRight, HomeOutlined } from "@mui/icons-material"
import { Box, Button, IconButton, Typography } from "@mui/material"

const PathViewer = () => {
    const paths = location.pathname.split('/').filter(s => s.trim().length)

    const PathText = ({ children, fullPath }: { children: string, fullPath: string }) => {
        return <Button href={`/${fullPath}`} color='primary' style={{
            borderRadius: '24px',
            padding: '0px 10px',
        }}>
            <Typography textTransform='capitalize'>
                {children}
            </Typography>
        </Button>
    }

    return <Box
        display='flex'
        margin='5px'>
        <IconButton href='/'><HomeOutlined color='primary' /></IconButton>
        {paths.map((path, index) => <Box display='flex'>
            <IconButton disableRipple style={{ cursor: 'default' }}><ChevronRight color='primary' /></IconButton>
            <PathText fullPath={paths.slice(0, index + 1).join('/')}>{path}</PathText>
        </Box>)
        }
    </Box >
}

export default PathViewer
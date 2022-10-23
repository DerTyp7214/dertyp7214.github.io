import { Box, Card, CardMedia, Typography, TypographyProps } from '@mui/material'

const AppTemplate = (props: {
    title: string;
    contentTitle: string;
    contentBody: string;
    icon: string;
    frames: string[];
}) => {

    const {
        title,
        contentTitle,
        contentBody,
        icon,
        frames
    } = props

    const CardImage = (props: { frame: string }) => <Card sx={{ background: 'transparent', borderRadius: '8px', margin: '8px', maxWidth: 150 }}>
        <CardMedia
            component='img'
            image={props.frame}
            alt={props.frame}
        />
    </Card>

    const Images = (props: { frames: string[] }) => {
        return <Box sx={{
            overflow: 'auto'
        }}>
            <Box sx={{
                display: 'flex',
                width: `calc(150px * ${props.frames.length})`
            }}>
                {props.frames.map(f => <CardImage frame={f} />)}
            </Box>
        </Box>
    }

    const LauncherIcon = (props: { icon: string }) => {
        return <Card sx={{
            background: 'transparent',
            borderRadius: '12%', margin: '8px',
            width: 150, maxWidth: '20vw',
            height: 150, maxHeight: '20vw'
        }}>
            <CardMedia
                component='img'
                image={props.icon}
                alt={props.icon}
            />
        </Card>
    }

    const Text = (props: TypographyProps) => {
        const { sx, ...rest } = props

        return <Typography
            {...rest}
            sx={{
                color: 'white',
                ...props.sx
            }} />
    }

    return <Box>
        <Box sx={{ display: 'flex' }}>
            <LauncherIcon icon={icon} />
            <Text variant='h3' sx={{
                margin: 'auto', fontSize: 'min(6vw, 42pt)'
            }}>{title}</Text>
        </Box>
        <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
            <Images frames={frames} />
        </Box>
        <Box sx={{ margin: '8px' }}>
            <Text variant='body1' sx={{ fontWeight: 'bold', marginBottom: '8px' }}>{contentTitle}</Text>
            <Text variant='body1' gutterBottom>{contentBody.replace(new RegExp('\\n', 'g'), '<br/>')}</Text>
        </Box>
    </Box>
}

export default AppTemplate
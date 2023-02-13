import { Button, Box } from '@mui/material'
import { router } from '@inertiajs/react'

export default ({ data }) => {
    const links = data.links
    
    const handleClick = link => {
        router.get(link.url)
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {
                links.map((link, idx) => (
                    <Button
                        variant={link.active ? 'contained' : 'outlined'}
                        key={idx}
                        style={{ margin: '.3rem' }}
                        disabled={!link.url}
                        onClick={link.url ? handleClick.bind(null, link) : null}
                    >
                        {link.label}
                    </Button>
                ))
            }
        </Box>
    )
}

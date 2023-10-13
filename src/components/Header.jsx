import React from 'react'
import { AppBar, Toolbar, Stack, Button, Typography, IconButton } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


export default function Header() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <ShoppingCartOutlinedIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    Shopsy
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Home</Button>
                    <Button color='inherit'>Categories</Button>
                    <Button color='inherit'>Cart</Button>
                </Stack>
            </Toolbar>

        </AppBar>
    )
}

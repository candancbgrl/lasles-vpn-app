import React, { useState } from 'react';
import { Toolbar, AppBar, Typography, Stack, IconButton, Drawer, List, ListItemText } from '@mui/material';
import { ReactComponent as Logo } from './SvgCodes/Logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import { ListItemStyle, NavbarItem, SignUp,HeaderFirst } from './Styled'


export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <AppBar color="transparent" elevation={0}
            position="static" sx={{ paddingLeft: { md: 18 }, paddingRight: { md: 18 } }}>
            <Toolbar>
                <Stack direction='row' spacing={3} justifyContent='flex-end' alignItems='center' sx={{ flexGrow: 1, paddingTop: { md: 5, xs: 1 } }}>
                    <Logo />
                    <Stack direction='row' sx={{ flexGrow: 1 }} >
                        <HeaderFirst variant='h5'>
                            Lasles
                        </HeaderFirst>
                        <HeaderFirst isVpn variant='h5'  >
                            VPN
                        </HeaderFirst>
                    </Stack>
                    <Stack direction='row' sx={{ flexGrow: 1, display: { lg: 'flex', xs: 'none' } }} spacing={3}  >
                        <NavbarItem >About</NavbarItem >
                        <NavbarItem>Features</NavbarItem>
                        <NavbarItem>Pring</NavbarItem>
                        <NavbarItem>Testinals</NavbarItem>
                        <NavbarItem>Help</NavbarItem>
                    </Stack>
                    <Stack direction='row' spacing={3} sx={{ display: { lg: 'flex', xs: 'none' } }} >
                        <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center' }}  >
                            Sign in
                        </Typography>
                        <SignUp variant="outlined" color='error' >
                            <Typography variant="subtitle1" sx={{ textTransform: 'none' }} >
                                Sign up
                            </Typography>
                        </SignUp>
                    </Stack>
                    <IconButton edge="end" color="inherit" onClick={handleMenuToggle} aria-label="menu" sx={{ display: { sm: 'none', justifyContent: 'flex-end', } }}>
                        <MenuIcon fontSize="large" color='error' />
                    </IconButton>
                    <Drawer sx={{ display: { lg: 'none', justifyContent: 'flex-end', } }} anchor="left" open={isMenuOpen} onClose={handleMenuToggle}>
                        <List sx={{ width: '220px' }}>
                            <ListItemStyle>
                                <ListItemText primary="About" />
                            </ListItemStyle>
                            <ListItemStyle>
                                <ListItemText primary="Features"  />
                            </ListItemStyle>
                            <ListItemStyle>
                                <ListItemText primary="Pring" />
                            </ListItemStyle>
                            <ListItemStyle>
                                <ListItemText primary="Testinals" />
                            </ListItemStyle>
                            <ListItemStyle >
                                <ListItemText primary="Help" />
                            </ListItemStyle>
                        </List>
                    </Drawer>
                </Stack>
            </Toolbar>
        </AppBar>

    );
};
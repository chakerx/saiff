import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";

const pages = [{text:'Products',link:'/Product'}, {text:'Login',link:'/login'}, {text:'Register',link:'/register'}];


const Navbar = () => {


  return (
    <AppBar position="static" style={{backgroundColor:'#282c34'}}>
      <Container maxWidth="xl"  >
        <Toolbar disableGutters>
         

           
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'rgb(49, 122, 49)',
              textDecoration: 'none',
            }}
            style={{display:'flex',justifyContent:'space-between' }}
          >
            <h3>El Manbet</h3>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent:'flex-end'  } }}>
            {pages.map((page) => (
              <Button
                key={page.text}
              
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                
                <Link to={page.link}>{page.text}</Link>
                
              </Button>
              
            ))}
            <Button>
            <Link to="/Panier">
             <ShoppingCartOutlinedIcon style={{margin:"19px"}}> </ShoppingCartOutlinedIcon>
             </Link>
             </Button>
          </Box>
        </Toolbar>
       
      </Container>
    </AppBar>
  );
};
export default Navbar;

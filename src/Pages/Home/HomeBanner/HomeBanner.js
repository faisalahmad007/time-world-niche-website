import { Container, Grid,Typography,Button} from '@mui/material';
import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import banner from '../../../images/banner.webp';
import Aos from 'aos';
import 'aos/dist/aos.css';


Aos.init();
const HomeBanner = () => {
    return (
    <div style={{backgroundColor: '#F0F0F2'}}>
        <Container >
        <Grid container spacing={2}> 
          <Grid sx={{mt: 8}} item xs={12} md={8}>
          <Typography variant="h1" gutterBottom>
            Select Your New
            Perfect Style
          </Typography>
          <NavLink style={{textDecoration: 'none'}} to="/products">
          <Button sx={{width: '50%',m: 1}}type="submit" variant="contained">Explore More</Button>
         </NavLink>
          </Grid>
          <Grid item xs={12} md={4}>
             <img data-aos="zoom-in-up" src={banner} alt="banner_images" style={{height: '100%', width:'auto'}}/>
        </Grid>
        </Grid>
    </Container>
    </div>
    );
};

export default HomeBanner;
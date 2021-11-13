import { Button, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

Aos.init();
const Product = (props) => {
    
    const{name, description,img,price,_id} = props.product;
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card data-aos="flip-up" sx={{ minWidth: 275,border: 0,boxShadow: 0 }}>
            <CardMedia
        component="img"
        style={{width:'75%', height:'250px',margin:'0 auto'}}
        image={img}
        alt="product_image"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
        <Typography variant="h6" color="text.secondary">
         ${price}
        </Typography>
        <NavLink style={{textDecoration: 'none'}} to={`/booking/${_id}`}>
          <Button sx={{width: '50%',m: 1}}type="submit" variant="contained">Add To Cart</Button>
         </NavLink>
      </CardContent>
      
    </Card>
          </Grid>
    );
};

export default Product;
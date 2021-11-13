import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Product from '../Product/Product';
;

const HomeProducts = () => {
    const[homeProducts, setHomeProducts] = useState([]);

    useEffect(() => {
        fetch('https://vast-wave-30362.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setHomeProducts(data.slice(0,6)))
        },[])
  
    return (
        <Box sx={{ flexGrow: 1 }}>
          <Container>
          <Typography sx={{ fontWeight: '600',color: 'success.main', m:1 }} variant="h6" component="div">
               Our Products
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            homeProducts.map(product =><Product
             key={product._id}
             product={product}
            ></Product>)
        } 
      </Grid>
      </Container>
    </Box>
    );
};

export default HomeProducts;
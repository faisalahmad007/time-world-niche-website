import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Product from '../Product/Product';
import Navigation from '../../Shared/Navigation';
;

const Products = () => {
    const[products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://vast-wave-30362.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
        })
  
    return (
      <div>
        <Navigation></Navigation>
        <Box sx={{ flexGrow: 1 }}>
          <Container>
          <Typography sx={{ fontWeight: '600',color: 'success.main', m:2 }} variant="h6" component="div">
               Our Products
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
        {
            products.map(product =><Product
             key={product._id}
             product={product}
            ></Product>)
        } 
      </Grid>
      </Container>
    </Box>
    </div>
    );
}

export default Products;
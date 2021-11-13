import * as React from 'react';
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import Review from '../Review/Review';



const HomeReviews = () => {
    const[reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://vast-wave-30362.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data));
        })
  
    
    return (
       
            <Box sx={{ flexGrow: 1 }}>
          <Container>
          <Typography sx={{ fontWeight: '600',color: 'success.main', m:2, fontSize: '30px'}} variant="h6" component="div">
               Client Reviews
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            reviews.map(review =><Review
             key={review.name}
             review={review}
            ></Review>)
        } 
      </Grid>
      </Container>
    </Box>
    
    );
};

export default HomeReviews;
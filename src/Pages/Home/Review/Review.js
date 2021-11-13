import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, Rating } from '@mui/material';



const Review = (props) => {
 
    const{name, comments,rating,_id} = props.review;
   
    
    return (
       
          <Grid item xs={4} sm={4} md={4} >
            <Card data-aos="flip-up" sx={{ minWidth: 275,border: 0,boxShadow: 0 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {comments}
        </Typography>
        <Typography variant="h6" color="text.secondary">
        <Rating defaultValue={rating}/>
        </Typography>
      </CardContent>
      
    </Card>
          </Grid>
    
    );
};

export default Review;
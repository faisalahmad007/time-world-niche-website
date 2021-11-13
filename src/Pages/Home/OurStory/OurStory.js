import { Grid } from '@mui/material';
import React from 'react';
import ourstory from '../../../images/ourstory.jpg';

const OurStory = () => {
    return ( 
        <Grid container spacing={2}> 
        <Grid sx={{mt: 4}} item xs={12} md={6}>
                <h2 className="text-left">Our Story</h2>
                <p>Read on for the ultimate list of the top high-end watches by some of the world’s most exclusive brands. You’ll also find a guide to buying a luxury watch, information about whether luxury watches make good investments, a detailed explanation of how to care for and maintain your luxury watch, and our answers to the most frequently asked questions related to the watch industry.</p>
                </Grid>
                <Grid sx={{mt: 4}} item xs={12} md={6}>
               <img src={ourstory} alt="ourstory" style={{width: '80%',height: '250px'}} /> 
            </Grid> 
            </Grid>
    );
};

export default OurStory;
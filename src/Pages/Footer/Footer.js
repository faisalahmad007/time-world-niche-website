import React from 'react';
import { Grid } from '@mui/material';

const Footer = () => {
    return (
        
                <Grid container spacing={2}  style={{backgroundColor: 'darkGrey'}}> 
        
        <Grid sx={{mt: 8}} item xs={12} md={3}>
                        <h2>
                        ABOUT AGENCY
                        </h2>
                        <p>The world has become so fast paced that people don’t want to stand by reading a page of information, they would much rather look at a presentation and understand the message. It has come to a point</p>
           </Grid>         
                        <Grid sx={{mt: 8}} item xs={12} md={3}>
                        <h2>Company</h2>
                        <ul className="footer-list">
                            <li style={{listStyle: 'none'}}>Pricing</li>
                            <li style={{listStyle: 'none'}}>About</li>
                            <li style={{listStyle: 'none'}}>Gallery</li>
                            <li style={{listStyle: 'none'}}>Contact</li>
                        </ul>
                        </Grid>    
                        <Grid sx={{mt: 8}} item xs={12} md={3}>
                        <h2>Newsletter</h2>
                        <div>
                            <input type="email" className="p-2 m-2" placeholder="email"/>
                            <input type="submit"/>
                        </div>
                        </Grid>  
                    <Grid sx={{mt: 8}} item xs={12} md={3}>
                    <h2>Popular Destination</h2>
                        <ul className="footer-list">
                            <li style={{listStyle: 'none'}}>Gucci</li>
                            <li style={{listStyle: 'none'}}>Zenith</li>
                            <li style={{listStyle: 'none'}}>Armani</li>
                            <li style={{listStyle: 'none'}}>Ressence</li>
                        </ul>
                        </Grid>  
                       
                 </Grid>
                
               
            );
       
};

export default Footer;
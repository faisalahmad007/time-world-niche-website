import { Button, CircularProgress, Container, Grid, TextField, Typography,Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import register from '../../../images/registration.jpg';

const Register = () => {
    const[loginData, setLoginData] = useState({});
    
    const{ user, registerUser, isLoading,authError } = useAuth();

     const history = useHistory();
    const handleOnChange = e =>{
         const field = e.target.name;
         const value = e.target.value;
         const newLoginData = {...loginData};
         newLoginData[field] = value;
         setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('Your  Password did not match');
            return
        }
       registerUser(loginData.email, loginData.password,loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
        <Grid container spacing={2}> 
          <Grid sx={{mt: 8}} item xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
                Registration
            </Typography>
            {!isLoading && <form onSubmit={handleLoginSubmit}>

            <TextField sx={{width: '75%',m: 1}} id="standard-basic" name="name" label="Your Name" onBlur={handleOnChange} type="name" variant="standard" />

            <TextField sx={{width: '75%',m: 1}} id="standard-basic" name="email" label="Your Email" onBlur={handleOnChange} type="email" variant="standard" />

            <TextField sx={{width: '75%',m: 1}} id="standard-basic" label="Your Password" name="password" onChange={handleOnChange} type="password" variant="standard" />

            <TextField sx={{width: '75%',m: 1}} id="standard-basic" label="Retype Your Password" name="password2" onChange={handleOnChange} type="password" variant="standard" />
            
            
            <Button sx={{width: '75%',m: 1}}type="submit"variant="contained">Register</Button>

            <NavLink style={{textDecoration: 'none'}} to="/login">
                <Button variant="text">Already Registered? Please Login</Button>
            </NavLink>
            </form>}
            {isLoading && <CircularProgress/>}
            {user?.email && <Alert severity="success">User Created Successfully</Alert>} 
            {
            authError && <Alert severity="error">{authError}</Alert>
            }
          </Grid>

          <Grid item xs={12} md={6}>
              <img src={register} style={{width: '100%'}} alt="Login"/>
              </Grid>
        </Grid>
    </Container>
    );
};

export default Register;
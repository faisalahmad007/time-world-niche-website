import axios from 'axios';
import React,{ useEffect,useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { Container, Grid, TextField, Typography,Button, CircularProgress, Alert, Card, CardMedia, CardContent} from '@mui/material';
import './Booking.css';
import Navigation from '../../Shared/Navigation';
import Product from '../Product/Product';
import Products from '../Products/Products';


const Booking = (props) => {

 const{serviceId} = useParams();
    const[products, setProducts] = useState({});
    const { register, handleSubmit,reset,formState: { errors },   } = useForm();
    
    
   
   
    useEffect(() =>{
        fetch(`https://vast-wave-30362.herokuapp.com/products/${serviceId}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

  const onSubmit = data => {
    
    data.status = "pending";
       console.log(data);
       axios.post('https://vast-wave-30362.herokuapp.com/booking', data)
       .then(res => {
          if(res.data.insertedId){
              alert('Booking successfully');
              reset();
          }
       })
    };
    return (
    <Container> 
      <Navigation></Navigation>
       
            <h2>Booking Products</h2>
            
   
<Grid  item xs={12} sm={12} md={12}>
<div className="booking-area">
<form onSubmit={handleSubmit(onSubmit)}>
      
      <input type="text"  className="p-2 m-2"  {...register("name",{ required: true,maxLength: 20 })} placeholder="name" defaultValue={products?.name}/>
      <br/>
      <input type="email" className="p-2 m-2" {...register("email")} defaultValue={products?.email} placeholder="email" />
      <br/>
      <textarea type="text" className="p-2 m-2" {...register("address")} placeholder="Address" />
      <br/>
      <input type="number" className="p-2 m-2" {...register("phone")} placeholder="Phone" />
      

      {errors.exampleRequired && <span>This field is required</span>}
      <br/>
      <input type="submit"value="Order Now" />
    </form>
</div>
</Grid>
<Grid item xs={12} sm={5} md={5} >

  </Grid>
</Container>
    );
};

export default Booking;
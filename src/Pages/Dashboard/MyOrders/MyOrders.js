import * as React from 'react';
import {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const{user} = useAuth();
    const [bookings, setBookings] = useState([]);
   

    useEffect(() => {
       const url = `https://vast-wave-30362.herokuapp.com/booking?email=${user.email}`
       fetch(url)
       .then(res => res.json())
       .then(data =>setBookings(data))
    }, []);
    const handleDelete = id =>{
        const url = `https://vast-wave-30362.herokuapp.com/booking/${id}`;
        fetch(url, { 
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
           
            if(data.deletedCount){
                 alert('Deleted successfully');
                const remainingServices = bookings.filter(booking => booking._id !== id)
                setBookings(remainingServices);
            

            }
           
        })
    }
    return (
        <div>
            <h2>My Orders: {bookings.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right"><button onClick={()=>handleDelete( row._id )}>Remove Item</button></TableCell>
             
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default MyOrders;
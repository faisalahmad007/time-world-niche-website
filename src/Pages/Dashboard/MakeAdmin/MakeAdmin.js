import { Alert, Button, TextField } from '@mui/material';
import React,{ useState} from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const [success, setSuccess] = useState(false);
   
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email};
        fetch('https://vast-wave-30362.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
             if(data.modifiedCount){
               
                setEmail('');
                setSuccess(true);
             }
            
        })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
               <TextField sx={{width: '50%'}} label="Email"
               type="email" variant="standard" onBlur={handleOnBlur}/>
               <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {
            success && <Alert severity="success">Made Admin Successfully</Alert>} 
        </div>
    );
};

export default MakeAdmin;
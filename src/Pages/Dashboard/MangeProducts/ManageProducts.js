import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageProducts.css';


const ManageProducts = () => {
    const[products,setProducts] = useState([]);
    useEffect(() => {
        fetch('https://vast-wave-30362.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleDelete = id =>{
        const url = `https://vast-wave-30362.herokuapp.com/products/${id}`;
        fetch(url, { 
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
           
            if(data.deletedCount){
                alert('deleted');
                const remainingServices = products.filter(product=>product._id !== id)
                setProducts(remainingServices);
            

            }
           
        })
    }
    return (
        <div>
            <h2>Manage All Products</h2>
           
           
          <div className="product-area">

      
            {
           products.map(product => <div key={product._id}>
               
                <img src={product.img} alt="productimages" style={{width:'50%'}}/>
                <h3>{product.name}</h3>
                <h5>{product.description}</h5>
                <h3>Price:{product.price}</h3>
              <div>
             <Link to={`/update/${product._id}`}>
                <button>Update</button>
                </Link>
                <button onClick={()=>handleDelete(product._id)}>Remove Products</button>
                </div>
            </div>)}
           
      </div>
        </div>
    );
};

export default ManageProducts;
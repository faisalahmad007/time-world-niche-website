import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProducts.css';

const AddProducts = () => {
    const { register, handleSubmit,reset,formState: { errors }  } = useForm();
  const onSubmit = data => {
      
       console.log(data);
       axios.post('https://vast-wave-30362.herokuapp.com/products', data)
       .then(res => {
          if(res.data.insertedId){
              alert('added successfully');
              reset();
          }
       })
    };
    return (
        <div className="add-service">
            <h2>Add products</h2>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
      
      <input type="text" className="p-2 m-2"  {...register("name",{ required: true,maxLength: 20 })} placeholder="product name" />
      <br/>
      <input type="text" className="p-2 m-2" {...register("img")} placeholder="img Url" />
      <br/>
      <textarea type="text" className="p-2 m-2" {...register("description")} placeholder="description" />
      <br/>
      <input type="number" className="p-2 m-2" {...register("price")} placeholder="price" />
      

      {errors.exampleRequired && <span>This field is required</span>}
      <br/>
      <input type="submit" />
    </form>
    </div>
        </div>
    );
};

export default AddProducts;
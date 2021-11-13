import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";


const Reviews = () => {
    const { register, handleSubmit,reset,formState: { errors }  } = useForm();
  const onSubmit = data => {
      
       console.log(data);
       axios.post('https://vast-wave-30362.herokuapp.com/reviews', data)
       .then(res => {
          if(res.data.insertedId){
              alert('Review added successfully');
              reset();
          }
       })
    };
    return (
        <div className="add-service">
            <h2>Give Your Reviews</h2>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
      
      <input type="text" className="p-2 m-2"  {...register("name",{ required: true,maxLength: 20 })} placeholder="Your Name" />
      <br/>
      <textarea type="text" className="p-2 m-2" {...register("comments")} placeholder="Your Comments" />
      <br/>
      <input type="number" className="p-2 m-2" {...register("rating")} placeholder="Rating" />
      

      {errors.exampleRequired && <span>This field is required</span>}
      <br/>
      <input type="submit" />
    </form>
    </div>
        </div>
    );
};

export default Reviews;
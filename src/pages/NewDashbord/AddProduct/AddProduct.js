import React from 'react';
import './AddProduct.css';
import Dropfileinput from '../AddBlog/Dropfileinput';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {   
        fetch('http://localhost:5000/api/addService', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(data => {
            if(data.message){
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'A new blog has been addeded',
                showConfirmButton: false,
                timer: 1500
            })
            reset()
            }
        })                   
    };


    // const onSubmit = data => {   
    //   console.log(data);
    //   reset();    
                         
    // };

    const onFileChange = (files) => {
      console.log(files)
    }
  return (
    <div className="addproductbody">
        <h1>AddProduct</h1>
        <div className="productfileuploadbody">
          <div className="d-product-box">
              <Dropfileinput 
              onFileChange={(files) => onFileChange(files)}
              />
          
          <form onSubmit={handleSubmit(onSubmit)}>
               
                <input type="text" {...register("image")} placeholder="Image Link" /> <br />
                
                <input type="text" {...register("name")} placeholder="Car Name" /> <br />
                <input type="text" {...register("year")} placeholder="Model Year" /> <br />
                <input type="text" {...register("price")} placeholder="Rent Price" /> <br />
                <input type="text" {...register("kilo")} placeholder="Car Kilo" /> <br />
                <input type="text" {...register("type")} placeholder="Auto or Manual" /> <br />
                <input type="text" {...register("fual")} placeholder="Disel or Fual" /> <br />
                <input type="text" {...register("discountPrice")} placeholder="Discount Price" /> <br />
                <input type="text" {...register("details")} placeholder="Car Details" /> <br />

                {/* <textarea className="text-area" type="text" {...register("details")} placeholder="Comment"  /> <br /> */}
             
                <input className="submit-btn" type="submit" />
        </form>
        </div>
        </div>
    </div>
  )
}

export default AddProduct
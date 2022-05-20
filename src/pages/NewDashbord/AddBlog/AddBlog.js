import React from 'react'
import './AddBlog.css'
import Dropfileinput from './Dropfileinput';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {   
      console.log(data)    
        fetch('http://localhost:5000/api/blog', {
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
    <div className="addblogbody">
        <h1>AddBlog</h1>
        <div className="fileuploadbody">
          <div className="blog-box">
              <Dropfileinput 
              onFileChange={(files) => onFileChange(files)}
              />
          
          <form onSubmit={handleSubmit(onSubmit)}>
               
                <input type="text" {...register("image")} placeholder="Image Link" /> <br />
                
                <input type="text" {...register("title")} placeholder="Title" /> <br />

                <textarea className="text-area" type="text" {...register("details")} placeholder="Comment"  /> <br />
             
                <input className="submit-btn" type="submit" />
        </form>
        </div>
        </div>
    </div>
  )
}

export default AddBlog